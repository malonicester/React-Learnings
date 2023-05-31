import React from 'react'
import { extendTheme } from '@chakra-ui/react'
const Demo = () => {

    const theme = extendTheme({
        colors: {
            brand: {
                100: "#f7fafc",
                900: "#1a202c",
            },
        },
    })

    return (
        <div>

        </div>
    )
}

export default Demo