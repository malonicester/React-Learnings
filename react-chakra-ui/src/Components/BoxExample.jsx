import React from 'react'
import { Box } from '@chakra-ui/react'

const BoxExample = () => {
    return (
        <div><Box cursor={'pointer'} bg="#0c5aeb" w="100%" _hover={{ background: '#2bba86' }} margin={10} p={4} color="white" >This is the box</Box></div>
    )
}

export default BoxExample;