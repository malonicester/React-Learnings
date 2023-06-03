import React, { useContext } from 'react'
import { Flex, Stack, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider';
import Button from './button/Button';
const links = [
    { path: '/', content: "Home" },
    { path: '/about', content: "About" },
    { path: '/products', content: "Products" },
]
const Navbar = () => {

    const { handleLogin } = useContext(AuthContext);

    return (
        <>
            <Flex alignItems={'center'} borderBottom={'1px'} borderColor={'gray.500'} justifyContent={'space-evenly'} padding={'15px'} >
                {links?.map((item) => {
                    return <NavLink key={item.path} to={item.path} style={({ isActive }) => isActive ? { color: 'rgb(31, 107, 206)',borderBottom:'1px solid blue' } : { color: 'black' }} ><Text fontWeight={'medium'} >{item.content}</Text></NavLink>
                })}
                <Stack alignSelf={'flex-end'} direction={'row'} >
                    <NavLink to='/login'><Button onClick={handleLogin} text="Login" /></NavLink>
                    <NavLink to='/signup'> <Button onClick={handleLogin} text="Signup" >Sign up</Button></NavLink>
                </Stack>
            </Flex>
        </>
    )
}

export default Navbar