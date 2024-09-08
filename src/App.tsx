import { ChakraProvider } from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import customTheme from "./theme";

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Router>
        <Routes>
          <Route path="/room-chat/login" element={<Login />} />
          <Route path="/room-chat/" element={<ProtectedRoute />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
