import { useNavigate, Outlet } from "react-router-dom";
import React from 'react';
import Preloader from "../Preloader/Preloader";

function ProtectedRoute({ auth }) {
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!auth.isFetching && !auth.email) {
            navigate('/');
        }
    }, [auth]);

    return (
        <>
            {
                auth.isFetching &&
                <Preloader />
            }
            {
                auth.email &&
                <Outlet />
            }
        </>
    );
}

export default ProtectedRoute;