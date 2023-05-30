import React from 'react'
import { Center } from '@chakra-ui/react';
import {PhoneIcon} from '@chakra-ui/icons';
const CenterExample = () => {
    return (
        <>
            <Center w='40px' h='40px' bg='tomato' color='white'>
               <PhoneIcon/>
            </Center>
        </>
    )
}

export default CenterExample