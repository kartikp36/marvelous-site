import { Box, Heading } from "@chakra-ui/react";
import Form from "../components/Form";
import DisplayShows from "../components/DisplayShows";
import { useEffect } from "react";
import Shows from "../models/ShowList";

function App() {
  const schema = {type: 'movies',page: 1, chronology: 'ASC'}
  const { getShows, shows } = Shows;
  useEffect(() => {
    getShows(schema);
    
  }, []);

  console.log(shows);
  return (
    <Box className="App" textAlign={"center"} marginY={"2%"}>
      <Heading size={{ base: "lg", md: "xl", lg: "2xl" }}>MCU</Heading>
      <Form />
      <DisplayShows />
    </Box>
  );
}

export default App;
