import { Button, Container, Heading, Stack } from "@chakra-ui/react";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, facebookProvider, googleProvider } from "../../firebase/config";

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("user", result.user);
      navigate("/room-chat/home/");
    } catch (error) {
      console.error("Error during Google login", error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      console.log("user", result.user);
      navigate("/room-chat/home/");
    } catch (error) {
      console.error("Error during Facebook login", error);
    }
  };

  return (
    <Container p={5} height="100vh">
      <Stack paddingTop="10">
        <Heading color="brand.700" as="h1" size="xl" textAlign="center" mb={4}>
          Room Chat
        </Heading>
        <Button variant="outline" onClick={handleGoogleLogin}>
          Login with Google
        </Button>
        <Button variant="outline" onClick={handleFacebookLogin}>
          Login with Facebook
        </Button>
      </Stack>
    </Container>
  );
};

export default Login;
