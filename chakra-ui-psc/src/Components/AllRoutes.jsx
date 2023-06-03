import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from '../Pages/About';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Products from '../Pages/Products';
import Registration from '../Pages/Registration';
import PrivateRoute from '../Components/PrivateRoute';


const AllRoutes = () => {
    const location = useLocation();
    console.log(location);
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/products' element={
                    <PrivateRoute>
                        <Products />
                    </PrivateRoute>
                } />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Registration />} />
            </Routes>
        </>
    )
}

export default AllRoutes