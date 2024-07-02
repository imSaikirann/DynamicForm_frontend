import React from 'react';
import { Text, Box, Button, FormControl, FormLabel, Input, Textarea, VStack, useToast } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
});

export default function CreateForm() {
  const toast = useToast();

  const handleSubmit = (values, { resetForm }) => {
    // Handle form submission
    console.log('Form values:', values);
    toast({
      title: 'Form submitted successfully!',
      description: "We've received your form data.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
    resetForm();
  };

  return (
    <Box m={["2rem","4rem"]}>
      <Formik
        initialValues={{ name: '', description: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <VStack spacing={4} align="stretch">
              <FormControl id="name" isInvalid={errors.name && touched.name}>
                <FormLabel fontSize={["16px", "18px"]}>Name</FormLabel>
                <Field
                  as={Input}
                  name="name"
                  type="text"
                  placeholder="What is your title of form"
                  fontSize={["16px", "18px"]}
                />
                {errors.name && touched.name ? (
                  <Text color="red.500" fontSize="sm">{errors.name}</Text>
                ) : null}
              </FormControl>

              <FormControl id="description" isInvalid={errors.description && touched.description}>
                <FormLabel fontSize={["16px", "18px"]}>Description</FormLabel>
                <Field
                  as={Textarea}
                  name="description"
                  placeholder="Enter description about form"
                  fontSize={["16px", "18px"]}
                />
                {errors.description && touched.description ? (
                  <Text color="red.500" fontSize="sm">{errors.description}</Text>
                ) : null}
              </FormControl>

              <Link to="/createform">
                <Button
                  mt={["1rem","2rem"]}
                  w={["100%", "230px"]}
                  colorScheme="blackAlpha"
                  bg="black"
                  borderRadius="4px"
                  color="white"
                  type="submit"
                >
                  <Text fontSize={{ base: '14px', md: '18px' }}>Next</Text>
                </Button>
              </Link>
            </VStack>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
