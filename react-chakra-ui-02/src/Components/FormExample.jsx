import React from 'react'
import { Stack, Input, Button, Container } from '@chakra-ui/react'
const FormExample = () => {
    const [formState, setFormState] = React.useState({
        email: "",
        password: ""
    })
    const { email, password } = formState;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value })
    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log(formState)
    }
    // console.log(formState)
    return (
        <div>
            <Container>
                <Stack spacing={'28px'}>
                    <Input type='email' name='email' value={email} onChange={handleChange} placeholder='Enter username' />
                    <Input name='password' value={password} onChange={handleChange} type='password' placeholder='Enter password' />
                    <Button isLoading={false} onClick={handleClick} colorScheme='blue' type='submit'>Submit</Button>
                </Stack>
            </Container>
        </div>
    )
}

export default FormExample