import { Navigate, Outlet } from "react-router-dom";
import React from 'react';

function ProtectedRoute({ loggedIn }) {
    return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
}

export default ProtectedRoute;