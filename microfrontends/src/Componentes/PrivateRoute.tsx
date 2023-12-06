// src/components/PrivateRoute.tsx

import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from '../Componentes/configureStore';

interface PrivateRouteProps {
    children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const location = useLocation();
    const isAuthenticated = useSelector((state: AppState) => state.login.isAuthenticated);

    if (!isAuthenticated) {
        // Redirigir al usuario al Login, pero guardar la ubicación a la que intentaban llegar
        return <Navigate to="/" replace state={{ from: location }} />;
    }

    return children;
};

export default PrivateRoute;
