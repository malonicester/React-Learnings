import {Container, Heading, Input, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Button from '../Components/button/Button';



const Login = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: ""
  });
  const { email, password } = formState;
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  }
  const handleSubmit = () => {

  }
  console.log(formState);
  return (
    <div>
      <Container mt={'24'}>
        <Heading m={'1rem'} as={'h2'} textAlign={'center'} >Login</Heading>
        <Stack spacing={'3.5'} >
          <Input value={email} onChange={handleFormChange} type='email' name='email' placeholder='Enter User Name' />
          <Input value={password} onChange={handleFormChange} type='password' name='password' placeholder='Enter Password' />
          <Button text="Login" />
          <NavLink to='/signup' >Not a user ? Create a new Account </NavLink>
        </Stack>
      </Container>
    </div>
  )
}

export default Login