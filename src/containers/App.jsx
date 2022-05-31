import { Box, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { Provider } from "mobx-react";
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import Form from "../components/Form";
import DisplayShows from "../components/DisplayShows";
import { FlagStore } from "../models/FlagStore";
import Footer from '../components/Footer';

const App = inject("ShowStore")(
  observer(({ ShowStore }) => {
    const { getShows } = ShowStore;
    useEffect(() => {
      getShows();
    }, []);

    return (
      <Box className="App" textAlign={"center"} marginTop={"2%"}>
        <Heading
          size={{ base: "xl", md: "xl", lg: "2xl" }}
          color={"#AA0505"}
          marginY={{ base: "8%", md: "4%", lg: "2%" }}>
          Marvel Cinematic Universe
        </Heading>
        <Form />
        <Provider FlagStore={FlagStore}>
          <DisplayShows />
        </Provider>
        <Footer/>
      </Box>
    );
  })
);

export default App;
