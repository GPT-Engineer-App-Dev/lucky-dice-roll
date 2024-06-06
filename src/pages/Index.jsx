// Update this page (the content is just a fallback if you fail and example)
import { Container, Text, VStack } from "@chakra-ui/react";
import RandomNumber from "../components/RandomNumber.jsx";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Your Blank Canvas</Text>
        <Text>Chat with the agent to start making edits.</Text>
        <RandomNumber />
      </VStack>
    </Container>
  );
};

export default Index;
