import React from 'react';
import { Box, ChakraProvider, theme } from '@chakra-ui/react';
import { TopPage } from 'pages/';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box mx="8" p="6" minH="100vh">
        <TopPage />
      </Box>
    </ChakraProvider>
  );
}

export default App;
