import React from 'react'
import { Stack, HStack, VStack, Box, useBreakpointValue, Heading } from '@chakra-ui/react'
const StackExample = () => {
    return (
        <div>
            <HStack spacing='24px'>
                <Box w='100px' h='100px' bg='yellow.200'>
                    1
                </Box>
                <Box w='100px' h='100px' bg='tomato'>
                    2
                </Box>
                <Box w='100px' h='100px' bg='pink.100'>
                    3
                </Box>
            </HStack>
        </div>
    )
}

function StackOnlyExample() {
    const text = useBreakpointValue({
        base: "BASE",
        sm: "SMALL",
        md: "MEDIUM",
        lg: "LARGE",
        xl: {
            size: "XTRA LARGE"
        },
        "2xl": {
            size: "XTRA XTRA LARGE"
        }
    })
    console.log(text);
    return (
        <>
            <Stack direction={{ base: 'column', lg: 'row' }}>
                <Heading as='h2'>{text.size ? text.size : text}</Heading>
                <Box w='100px' h='100px' bg='yellow.200'>
                    1
                </Box>
                <Box w='100px' h='100px' bg='tomato'>
                    2
                </Box>
                <Box w='100px' h='100px' bg='pink.100'>
                    3
                </Box>
            </Stack>
        </>
    );
}

export { StackExample, StackOnlyExample };