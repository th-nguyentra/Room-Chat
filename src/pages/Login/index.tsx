import { Button, Container, Heading, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { facebookProvider, googleProvider } from "../../firebase/config";
import useAuthRedirect from "../../hooks/useAuthRedirect";
import useAuthStore from "../../stores/authStore";

const Login = () => {
  useAuthRedirect();
  const navigate = useNavigate();

  const { signIn } = useAuthStore((state) => ({
    signIn: state.signIn,
  }));

  const handleGoogleLogin = async () => {
    await signIn(googleProvider);
    navigate("/room-chat/");
  };

  const handleFacebookLogin = async () => {
    await signIn(facebookProvider);
    navigate("/room-chat/");
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
