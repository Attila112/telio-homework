import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import IcosahedronVisualization from './components/IcosahedronVisualization';
import MainPage from './components/mainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path='/login' element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/icosahedron' element={<IcosahedronVisualization />} />
      </Routes>
    </Router>
  );
}

export default App;
