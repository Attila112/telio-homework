import { useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';

const IcosahedronVisualization = () => {
    const mountRef = useRef(null);

    const animate = useCallback((scene, camera, renderer, icosahedron) => {
        requestAnimationFrame(() => animate(scene, camera, renderer, icosahedron));
        icosahedron.rotation.x += 0.01;
        icosahedron.rotation.y += 0.01;
        renderer.render(scene, camera);
    }, []);

    useEffect(() => {
        if (!mountRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();

        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        mountRef.current.appendChild(renderer.domElement);

        const radius = 4;
        const detail = 4;
        const geometry = new THREE.IcosahedronGeometry(radius, detail);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
        const icosahedron = new THREE.Mesh(geometry, material);

        scene.add(icosahedron);

        camera.position.z = 10;

        animate(scene, camera, renderer, icosahedron);

        return () => {
            mountRef.current?.removeChild(renderer.domElement);
        };
    }, [animate]);

    return (
        <div>
            <Link to={"/"}>
                <button className='button-main'>Back</button>
            </Link>
            <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />
        </div>
    )
};

export default IcosahedronVisualization;
