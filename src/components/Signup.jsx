import React from 'react';
import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Input,
    VStack,
} from '@chakra-ui/react';

export default function Signup() {
    return (
        <Box display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            height={["90vh","70vh"]}>
            <Container centerContent >
                <Box fontSize={["14px","18px"]} boxShadow="lg" p={6} rounded="md" w={["300px", "400px"]}>
                    <VStack spacing={4} align="flex-start">
                        <FormControl>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <Input id="email" type="email" />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <Input id="password" type="password" />
                        </FormControl>
                        <Button bg="black" colorScheme='blackAlpha' width="full">
                            Signup
                        </Button>
                    </VStack>
                </Box>
            </Container>
        </Box>
    );
}
