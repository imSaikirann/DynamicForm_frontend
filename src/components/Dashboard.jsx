import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, TableContainer, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  // Sample data
  const forms = [
    { id: 1, name: 'Form 1', link: '/form1', responses: 10 },
    { id: 2, name: 'Form 2', link: '/form2', responses: 5 },
    { id: 3, name: 'Form 3', link: '/form3', responses: 7 },
  ];

  const { isOpen,  onClose } = useDisclosure();

  return (
    <Box p={4}>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Form Name</Th>
              <Th>Link to Form</Th>
              <Th isNumeric>Responses</Th>
            </Tr>
          </Thead>
          <Tbody>
            {forms.map((form) => (
              <Tr key={form.id}>
                <Td>{form.name}</Td>
                <Td>
                  <Link to={form.link}>
                    <Button colorScheme="teal" variant="link">View Form</Button>
                  </Link>
                </Td>
                <Td isNumeric>{form.responses}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      {/* Optional: Modal example if you want to add a detailed view */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Form Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Add form details here */}
            <p>Details about the form will go here.</p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
