import React from 'react'
import { Flex, Spacer, Square, Box, Center, Text, Grid, GridItem } from '@chakra-ui/react'

const FlexExample = () => {
    return (
        <div>
            <Flex>
                <Box w='70px' h='10' bg='red.500' />
                <Spacer />
                <Box w='70px' h='10' bg='red.500' />
                <Spacer />
                <Box w='70px' h='10' bg='red.500' />
            </Flex>
        </div>
    )
}

const GridExample = () => {
    return (
        <>
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: "repeat(3,1fr)", lg: 'repeat(5,1fr)' }} gap={{ base: 2, md: 4, lg: 6 }}>
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
            </Grid>
        </>
    )
}

export { FlexExample, GridExample };