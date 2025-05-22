import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// Example authentication check (replace with your own logic)
const isAuthenticated = () => {
    // e.g., check for a valid token in localStorage
    return !!localStorage.getItem('authToken');
};

const ProtectRoutes = () => {
    return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectRoutes;