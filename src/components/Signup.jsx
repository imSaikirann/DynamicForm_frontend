import React, { useState } from 'react';
import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Input,
    VStack,
    useToast,
} from '@chakra-ui/react';

export default function Signup() {
    const [username, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const toast = useToast();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/admin/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('user', JSON.stringify(data));
                toast({
                    title: 'Signup successful',
                    description: 'You have successfully signed up.',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                });
            } else {
                const errorData = await response.json();
                toast({
                    title: 'Signup failed',
                    description: errorData.message || 'Internal Server Error',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                });
                console.error('Error response:', errorData);
            }
        } catch (error) {
            console.error('Error:', error);
            toast({
                title: 'An error occurred',
                description: 'Unable to sign up. Please try again later.',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        }
    };

    return (
        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" height={["90vh", "70vh"]}>
            <Container centerContent>
                <Box fontSize={["14px", "18px"]} boxShadow="lg" p={6} rounded="md" w={["300px", "400px"]}>
                    <form onSubmit={handleSubmit}>
                        <VStack spacing={4} align="flex-start">
                            <FormControl>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <Input
                                    id="email"
                                    type="text"
                                    value={username}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="password">Password</FormLabel>
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </FormControl>
                            <Button type="submit" bg="black" colorScheme="blackAlpha" width="full">
                                Signup
                            </Button>
                        </VStack>
                    </form>
                </Box>
            </Container>
        </Box>
    );
}
