import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { m } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height={["80vh","60vh"]}
      textAlign="center"
      p={4}
    >
      <Text fontSize={{ base: '28px', md: '54px' }} fontWeight="bold">
        Dynamic Form Builder
      </Text>
      <Text fontSize={{ base: '18px', md: '32px' }} mt={2}>
        Interactive Form Creation and Submission Platform
      </Text>

      <Link to="/createform">
      <Button mt="2rem" w={["200px","230px"] } colorScheme='blackAlpha' bg="black" borderRadius="4px" color="white">
<Text fontSize={{ base: '14px', md: '18px' }}>Design Your Form Now</Text>
      </Button>
      </Link>
    </Box>
  );
}
