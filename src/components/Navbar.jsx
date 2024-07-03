import React from 'react';
import { Box, Flex, Heading,  useDisclosure, IconButton, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay ,Image} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box bg="black" px={["5","40"]}  py={["3","4"]} color="white"  fontFamily="Poppins">
            <Flex align="center" justify="space-between" wrap="wrap">
               <Image w={["52px","65px"]}  h={["55px","70px"]}  src='logo.png'>
               </Image>
                <IconButton
                    aria-label="Open Menu"
                    icon={<HamburgerIcon />}
                    display={{ base: 'block', md: 'none' }}
                    onClick={onOpen}
                />

                <Drawer
                    isOpen={isOpen}
                    placement="top"
                    onClose={onClose}
                    trapFocus={false}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerHeader>
                            <Flex justify="space-between" align="center">
                                <Heading size="md">Menu</Heading>
                                <IconButton
                                    aria-label="Close Menu"
                                    icon={<CloseIcon />}
                                    onClick={onClose}
                                />
                            </Flex>
                        </DrawerHeader>
                        <DrawerBody>
                            <Flex direction="column" align="center">
                                <Link to="/" onClick={onClose} style={{ margin: '10px 0' }}>Home</Link>
                                <Link to="/createform" onClick={onClose} style={{ margin: '10px 0' }}>Create Form</Link>
                                <Link to="/dashboard" onClick={onClose} style={{ margin: '10px 0' }}>Dashboard</Link>
                                <Link to="/signup" onClick={onClose} style={{ margin: '10px 0' }}>Signup</Link>
                            </Flex>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>

                <Flex display={{ base: 'none', md: 'flex' }}>
                    <Box mx={6}>
                        <Link to="/">Home</Link>
                    </Box>
                    <Box mx={6}>
                        <Link to="/createform">Create Form</Link>
                    </Box>
                    <Box mx={6}>
                        <Link to="/dashboard">Dashboard</Link>
                    </Box>
                    <Box mx={6}>
                        <Link to="/signup">Signup</Link>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    );
}
