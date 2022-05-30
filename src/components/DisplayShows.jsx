import Card from "./Card";
import { observer } from "mobx-react-lite";
import { inject } from "mobx-react";
import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";

const DisplayShows = inject(
  "ShowStore",
  "ParamsStore",
  "FlagStore"
)(
  observer(({ ShowStore, ParamsStore, FlagStore }) => {
    const { getShows } = ShowStore;
    const { updatePage } = ParamsStore;
    ShowStore = JSON.parse(JSON.stringify(ShowStore));
    FlagStore = JSON.parse(JSON.stringify(FlagStore));

    const handleClick = async () => {
      await updatePage();
      await getShows();
    };

    return (
      <Box marginX={"auto"} maxW={"84%"}>
        <SimpleGrid
          templateRows={""}
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            xl: "repeat(3, 1fr)",
          }}
          gap={4}
          my={{ base: 16, md: 16, xl: 16 }}>
          {ShowStore.shows.map((show) => (
            <Card key={show.id} show={show} />
          ))}
        </SimpleGrid>
        {FlagStore.loadButton ? (
          <Button
            onClick={() => {
              handleClick();
            }}>
            Load more
          </Button>
        ) : (
          <Button
            onClick={() => {
              window.scrollTo({top: 0, behavior: 'smooth'});
            }}>
            Back to top
          </Button>
        )}
        <Text
          my={4}
          color={"gray.600"}>{`That's it, you are in the endgame now!`}</Text>
      </Box>
    );
  })
);
export default DisplayShows;
