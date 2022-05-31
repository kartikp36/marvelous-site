import Card from "./Card";
import { observer } from "mobx-react-lite";
import { inject } from "mobx-react";
import {
  Box,
  Button,
  Image,
  SimpleGrid,
  Skeleton,
  Text,
} from "@chakra-ui/react";

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
        {ShowStore.shows === null && (
          <Box
            height={"64vh"}
            width={"100%"}
            marginY={8}
            justifyContent={"center"}
            textAlign={"-webkit-center"}
            // backgroundColor={"gray.50"}
            >
            <Text fontSize={"2xl"} color={"gray.600"} >Oh, snap! 404</Text>
            <Image
              src="/groot-404.gif"
              alt="404 Gif"
              borderRadius={8}
              border={"1px"}
              boxShadow="0.4em 0.4em 0.4em"
            />
          </Box>
        )}
        {ShowStore.shows?.length < 1 && (
          <SimpleGrid
            height={"60vh"}
            templateColumns={{
              base: "1fr 0fr 0fr",
              md: "1fr 1fr 0fr",
              xl: "repeat(3, 1fr)",
            }}
            justifyContent={"center"}
            gap={{
              base: 0,
              md: 2,
              xl: 4,
            }}
            my={{ base: 16, md: 16, xl: 16 }}>
            <Skeleton height="28em" width="100%" />
            <Skeleton height="28em" width="100%" />
            <Skeleton height="28em" width="100%" />
          </SimpleGrid>
        )}
        <SimpleGrid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            xl: "repeat(3, 1fr)",
          }}
          gap={4}
          my={{ base: 16, md: 16, xl: 16 }}>
          {ShowStore.shows?.map((show) => (
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
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}>
            Back to top
          </Button>
        )}
      </Box>
    );
  })
);
export default DisplayShows;
