import React, { useState } from 'react';
import { Button, Box, Text, VStack } from '@chakra-ui/react';
import { Random } from 'random-js';

const RandomNumber = () => {
  const [number, setNumber] = useState(null);
  const random = new Random();

  const generateRandomNumber = () => {
    const randomNumber = random.integer(1, 100);
    setNumber(randomNumber);
  };

  return (
    <Box p={4} borderWidth={1} borderRadius="lg" boxShadow="md" textAlign="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Random Number Generator</Text>
        <Button colorScheme="teal" onClick={generateRandomNumber}>Generate Random Number</Button>
        {number !== null && <Text fontSize="xl">Generated Number: {number}</Text>}
      </VStack>
    </Box>
  );
};

export default RandomNumber;