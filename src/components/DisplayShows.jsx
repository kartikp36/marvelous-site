import Card from "./Card";
import { observer } from "mobx-react-lite";
import { getSnapshot, onSnapshot } from "mobx-state-tree";
import { inject } from "mobx-react";
import { Box, Button, Grid } from "@chakra-ui/react";

let pages = 1;
const DisplayShows = inject("ShowStore",
"ParamsStore")(
  observer(({ ShowStore , ParamsStore}) => {
    const { getShows } = ShowStore;
    const {
      updatePage
    } = ParamsStore;

    ShowStore = JSON.parse(JSON.stringify(ShowStore));
    const handleClick = () => {
      updatePage()
      getShows();
    };
    return (
      <Box marginX={"auto"} maxW={"84%"}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
            xl: "repeat(3, 1fr)",
          }}
          gap={4}
          my={{ base: 16, md: 16, xl: 16 }}>
          {ShowStore.shows.map((show) => (
            <Card key={show.id} show={show} />
          ))}
        </Grid>
        <Button
          onClick={() => {
            handleClick();
          }}>
          Load more
        </Button>
      </Box>
    );
  })
);
export default DisplayShows;
