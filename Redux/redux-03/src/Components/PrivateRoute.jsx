import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
const PrivateRoute = ({ children }) => {

    const { isAuthenticated } = useSelector(state => state.authentication.isAuthenticated);
    
    if (!isAuthenticated) {
        return <Navigate to='/login' />
    }
    return children;
}

export default PrivateRoute