import { Box, Heading, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={4}>
        Home
      </Heading>
      <Text fontSize="lg">Welcome to the Home Page!</Text>
    </Box>
  );
};

export default Home;
