import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { isLoggedIn } = useContext(AuthContext);

    if (!isLoggedIn) {
        return <Navigate to='/login' />
    }
    return children;
}

export default PrivateRoute;