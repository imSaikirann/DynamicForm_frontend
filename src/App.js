import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard';

import Signup from './components/Signup';
import CreateForm from './components/CreatenewForm';

function App() {
  return (
   
     <ChakraProvider >
      <BrowserRouter>
        <Navbar />  {/* Corrected this line */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createform" element={<CreateForm />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
   
  );
}

export default App;
