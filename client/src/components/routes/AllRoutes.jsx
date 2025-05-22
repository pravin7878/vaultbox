import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../vault/vaultDeshboard';
import Login from '../auth/LoginForm';
import ProtectRoutes from './ProtectRoutes';
// import NotFound from '../pages/NotFound';

// Import your page components here

const AllRoutes = () => (
    <Routes>
        <Route path="/" element={
            <ProtectRoutes>
                <Home />
            </ProtectRoutes>
        } />
        <Route path="/login" element={<Login />} />
        {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
);

export default AllRoutes;