import React from 'react'
import { Text, Box, Button, FormControl, FormLabel, Input, Textarea, VStack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure,   Select } from '@chakra-ui/react'

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';




// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
});

export default function CreatenewForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  


  return (
    <>
      <Box display="flex"fontFamily="Poppins" flexDirection={["column-reverse","row"]} my={["1rem","2rem"]} mx={["1rem","6rem"]} gap="1rem" >
        <Box w="100%" border="2px solid #D9D9D9" borderRadius="8px" h="800px" >

          <Formik
            initialValues={{ name: '', description: '' }}
            validationSchema={validationSchema}

          >
            {({ errors, touched }) => (
              <Form>
                <VStack spacing={4} p="1rem" align="stretch" >
                  <FormControl id="name" isInvalid={errors.name && touched.name}>
                    <FormLabel fontSize={["16px", "16px"]}>Name</FormLabel>
                    <Field
                      as={Input}
                      name="name"
                      type="text"
                      placeholder="What is your title of form"
                      fontSize={["16px", "16px"]}
                    />
                    {errors.name && touched.name ? (
                      <Text color="red.500" fontSize="sm">{errors.name}</Text>
                    ) : null}
                  </FormControl>

                  <FormControl id="description" isInvalid={errors.description && touched.description}>
                    <FormLabel fontSize={["14px", "16px"]}>Description</FormLabel>
                    <Field
                      as={Textarea}
                      name="description"
                      placeholder="Enter description about form"
                      fontSize={["14px", "16px"]}
                      h={["50px", "100px"]}
                    />
                    {errors.description && touched.description ? (
                      <Text color="red.500" fontSize="sm">{errors.description}</Text>
                    ) : null}
                  </FormControl>


                </VStack>
              </Form>
            )}
          </Formik>

       

        </Box>


        <Box w={["100%","20%"]} display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center" border="2px solid #D9D9D9" borderRadius="8px" h={["100px","250px"]} >
          <Box
            display="flex"
            flexDirection={["row","column"]}
            alignItems="center"
            justifyContent="center"
            p="1rem"
            gap={["1rem","2rem"]}
            color="white"
            
          >
            <Button w={["120px","200px"]} onClick={onOpen}  colorScheme='blackAlpha' variant='outline'  >
             <Text fontSize={["14px","18px"]}> Add question</Text>
            </Button>
            <Button w={["80px","200px"]}  colorScheme='blackAlpha' variant='outline' >
              <Text fontSize={["14px","18px"]}> Preview</Text>
            </Button>
            <Button w={["80px","200px"]} colorScheme='blackAlpha' bg="#1E1E1E">
            <Text fontSize={["14px","18px"]}> Save</Text>
            </Button>
          </Box>
        </Box>

        <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent m="1rem">
                    <ModalHeader>Add a New Question</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Question</FormLabel>
                            <Input 
                                placeholder="Enter your question here"
                                
                               
                            />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Select Type</FormLabel>
                            <Select placeholder="Select type"  >
                                <option value="input">Input</option>
                                <option value="checkbox">Checkbox</option>
                            </Select>
                        </FormControl>
                     
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} >
                            Save
                        </Button>
                        <Button variant="ghost" onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
      </Box>
    </>
  )
}
