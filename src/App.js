import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Createform from './components/Createform';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />  {/* Corrected this line */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createform" element={<Createform />} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
