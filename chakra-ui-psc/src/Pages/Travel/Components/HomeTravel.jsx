import { Button, Container, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const HomeTravel = () => {
    return (
        <div>
            <Container>
                <HStack>
                    <Link to="/stays"> <Button variant={'ghost'}>Stays</Button></Link>
                    <Link to="/flights"> <Button variant={'ghost'}>Flights</Button></Link>
                    <Link to="/cars"> <Button variant={'ghost'}>Cars</Button></Link>
                    <Link to="/packages"> <Button variant={'ghost'}>Packages</Button></Link>
                    <Link to="/thingstodo"> <Button variant={'ghost'}>Thing to do</Button></Link>
                </HStack>
            </Container>
        </div>
    )
}

export default HomeTravel