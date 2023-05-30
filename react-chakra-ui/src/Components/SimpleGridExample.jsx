import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

const SimpleGridExample = () => {
    const items = new Array(12).fill(0).map((item, index) => index + 1);
    console.log(items);
    return (
        <div>
            <SimpleGrid columns={{ base: '1', sm: '2', md: '3', lg: '4', xl: '5', '2xl': '6' }} spacing={10}>
                {
                    items.map((item) => <Box key={item} bg="tomato" height={'80px'} >{item}</Box>)
                }
            </SimpleGrid>
        </div>
    )
}

export default SimpleGridExample