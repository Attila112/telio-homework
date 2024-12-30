import { useNavigate } from "react-router-dom";
const MainPage = () => {
    const navigate = useNavigate();
    const routeChange = (path) => {
        return navigate(path)
    }

    return (
        <div className="main-box">
            <h1>Hello!</h1>
            <h2>This is my solution for your tasks!</h2>
            <button className="button-main" onClick={() => routeChange("/login")}>Task 1</button>
            <button className="button-main" onClick={() => routeChange("/icosahedron")}>Task 2</button>
            <h3>By: Gonda Attila</h3>
        </div>
    )
}

export default MainPage;