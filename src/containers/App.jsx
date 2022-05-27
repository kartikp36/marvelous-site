import { Box, Heading } from "@chakra-ui/react";
import Form from "../components/Form";
import DisplayShows from "../components/DisplayShows";
import { useEffect } from "react";
import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';

const App = inject("ShowStore")(
  observer(({ ShowStore }) => {
  const { getShows } = ShowStore;
  useEffect(() => {
    getShows();
  }, []);

  return (
    <Box className="App" textAlign={"center"} marginY={"2%"}>
      <Heading size={{ base: "lg", md: "xl", lg: "2xl" }} color={"#AA0505"}>Marvel Cinematic Universe </Heading>
        <Form />
      <DisplayShows />
    </Box>
  );
}))

export default App;
