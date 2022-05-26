import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";

const Card = () => {
  const show = {
    id: 7,
    title: "Iron Man 3",
    release_date: "2013-05-03",
    overview:
      "Marvel's \"Iron Man 3\" pits brash-but-brilliant industrialist Tony Stark/Iron Man against an enemy whose reach knows no bounds. When Stark finds his personal world destroyed at his enemy's hands, he embarks on a harrowing quest to find those responsible. This journey, at every turn, will test his mettle. With his back against the wall, Stark is left to survive by his own devices, relying on his ingenuity and instincts to protect those closest to him. As he fights his way back, Stark discovers the answer to the question that has secretly haunted him: does the man make the suit or does the suit make the man",
    cover_url:
      "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/iron-man-3.jpg",
    trailer_url:
      "https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5806307374001",
    directed_by: "Shane Black",
    phase: 2,
    saga: "Infinity Saga",
    chronology: 8,
    post_credit_scenes: 1,
    imdb_id: "tt1300854",
  };

  return (
    <Center py={6}>
      <Box
        id={show.id}
        maxW={"512px"}
        w={"full"}
        maxH={"max-content"}
        h={"max"}
        boxShadow={"2xl"}
        rounded={"md"}
        p={9}
        paddingBottom={32}
        overflow={"hidden"}>
        <Box
          borderRadius={4}
          h={"max"}
          padding={4}
          bg={"gray.100"}
          pos={"relative"}
          textAlign={"-webkit-center"}>
          <Image
            borderRadius={8}
            maxH={"512px"}
            w={"auto"}
            src={
              "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/iron-man-3.jpg"
            }
            layout={"fill"}
          />
        </Box>
        <Stack>
          <Heading fontSize={"2xl"} fontFamily={"body"}>
          {show.title}
          </Heading>
          <Text
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}>
            {`Directed by: ${show.directed_by}`}
          </Text>
          <Text
            textTransform={"uppercase"}
            fontWeight={600}
            fontSize={"sm"}
            letterSpacing={1}>
            {`${show.saga}`}
          </Text>
          <Text
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1}>
            {`Phase ${show.phase}`}
          </Text>
          <Text color={"gray.600"} align={"justify"}>
            {show.overview}
          </Text>
            <Text color={"gray.800"} align="left">{` Post credit scenes: ${show.post_credit_scenes}`}</Text>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={500}>{` Release Date: ${show.release_date}`}</Text>
            <Text color={"gray.500"}>{` IMDB link, trailer link`}</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};
export default Card;
