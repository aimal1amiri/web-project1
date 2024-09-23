
import Homepage from "./Pages/HomePage.jsx";
import CreatePage from "./Pages/CreatePage.jsx";
import Navbar from "./components/Navbar.jsx";


import {Box, useColorModeValue} from "@chakra-ui/react";
import {Routes,Route} from "react-router-dom";

function App() {
  

  return (
    
    <Box minH={"100vh"} bg={useColorModeValue("grey.100", "gray.900")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/create" element={<CreatePage/>} />
      </Routes>
    </Box>

    
  )
}

export default App
