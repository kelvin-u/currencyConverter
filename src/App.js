import { Flex } from "@chakra-ui/react";
import Converter from "./components/Converter";

function App() {
  return (
    <>
      <Flex
        bgGradient="linear(to-t, #557c93, #08203e)"
        height="100vh"
        justifyContent="center"
      >
        <Converter />
      </Flex>
    </>
  );
}

export default App;
