// src/components/Dashboard.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const username = params.get('username');

  return (
    <div>
      <h1>Hello, {username}!</h1>
    </div>
  );
};

export default Dashboard;
