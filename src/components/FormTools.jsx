import React, { useState } from 'react';
import { Button, Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Input, FormControl, FormLabel, Select } from '@chakra-ui/react';

export default function FormTools() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [questionType, setQuestionType] = useState('');

    const handleTypeChange = (event) => {
        setQuestionType(event.target.value);
    };

    return (
        <Box
            display="flex"
            flexDirection="row"
            height="20vh"
            alignItems="center"
            justifyContent="center"
        >
            <Button onClick={onOpen}>Add question</Button>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add a New Question</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Question</FormLabel>
                            <Input placeholder="Enter your question here" />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Select Type</FormLabel>
                            <Select placeholder="Select option" onChange={handleTypeChange}>
                                <option value="input">Input</option>
                                <option value="checkbox">Checkbox</option>
                            </Select>
                        </FormControl>
                        {questionType === 'checkbox' && (
                            <FormControl mt={4}>
                                <Input placeholder="Enter add option 1" />
                            </FormControl>
                        )}
                    
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Save
                        </Button>
                        <Button variant="ghost" onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
}
