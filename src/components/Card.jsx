import {
  Box,
  Heading,
  Text,
  Stack,
  Image,
  Button,
  Link,
} from "@chakra-ui/react";

const Card = ({ show }) => {
  return (
    <Box
      id={show.id}
      border={"1px"}
      borderColor={"gray.100"}
      maxW={"512px"}
      w={"full"}
      maxH={"max-content"}
      h={"max"}
      transition="ease-in"
      transitionDuration="1s"
      _hover={{
        boxShadow: "0 0 0.4em #EC1C25",
        transition: "ease-in",
        transitionDuration: "0.2s",
      }}
      rounded={"md"}
      p={9}
      paddingBottom={4}
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
          src={show.cover_url}
          layout={"fill"}
        />

        <Stack>
          <Heading fontSize={"2xl"} fontFamily={"body"} marginTop={"1em"}>
            {show.title}
          </Heading>
          <Text fontWeight={800} fontSize={"sm"} letterSpacing={1.1}>
            {!!show.directed_by ? `Directed by: ${show.directed_by}` : ""}
          </Text>
          <Text
            textTransform={"uppercase"}
            fontWeight={600}
            fontSize={"sm"}
            letterSpacing={1}>
            {!!show.saga ? `${show.saga}` : ""}
          </Text>
          <Text
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1}>
            {!!show.phase ? `Phase ${show.phase}` : ""}
          </Text>
          <Text marginTop={"1.8em"} color={"gray.600"} align={"justify"}>
            {!!show.overview ? show.overview : ""}
          </Text>
          <Text marginTop={"1em"} color={"gray.700"} align="left">
            {!!show.post_credit_scenes
              ? ` Post credit scenes: ${show.post_credit_scenes}`
              : ""}
          </Text>
          <Text marginTop={"1em"} color={"gray.700"} align="left">
            {!!show.number_seasons
              ? ` Number of seasons: ${show.number_seasons}`
              : ""}
          </Text>
          <Text color={"gray.700"} align="left">
            {!!show.number_episodes
              ? ` Number of episodes: ${show.number_episodes}`
              : ""}
          </Text>
          <Text fontWeight={500}>
            {!!show.release_date ? ` Release Date: ${show.release_date}` : ""}
          </Text>
        </Stack>
      </Box>
      <Stack
        direction={"row"}
        spacing={"auto"}
        align={"center"}
        marginX={{ sm: "4%", md: "1%", lg: "12%" }}>
        <Link
          width={"max-content"}
          href={show.trailer_url}
          isExternal
          _hover={{
            textDecoration: "none",
          }}>
          <Button
            margin={"8px"}
            backgroundColor={"#FF0000"}
            color={"white"}
            _hover={{
              backgroundColor: "white",
              color: "#FF0000",
            }}>{`Watch Trailer`}</Button>
        </Link>
        <Link
          width={"max-content"}
          href={`https://www.imdb.com/title/${show.imdb_id}`}
          isExternal
          _hover={{
            textDecoration: "none",
          }}>
          <Button
            margin={"8px"}
            backgroundColor={"#deb522"}
            color={"#0c0b00"}
            _hover={{
              backgroundColor: "#0c0b00",
              color: "#deb522",
            }}>{` IMDB`}</Button>
        </Link>
      </Stack>
    </Box>
  );
};
export default Card;
