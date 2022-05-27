import { Box, Center, Heading, Text, Stack, Image, Grid } from "@chakra-ui/react";

const Card = ({ show }) => {
 
  return (
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
            src={show.cover_url}
            layout={"fill"}
          />
        </Box>
        <Stack>
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            {show.title}
          </Heading>
          <Text fontWeight={800} fontSize={"sm"} letterSpacing={1.1}>
            { !!show.directed_by ? `Directed by: ${show.directed_by}` : ''}
          </Text>
          <Text
            textTransform={"uppercase"}
            fontWeight={600}
            fontSize={"sm"}
            letterSpacing={1}>
            {!!show.saga ? `${show.saga}`: ''}
          </Text>
          <Text
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1}>
            {!!show.phase ? `Phase ${show.phase}`: ''}
          </Text>
          <Text color={"gray.600"} align={"justify"}>
            {!!show.overview ? show.overview : ''}
          </Text>
          <Text
            color={"gray.800"}
            align="left">{!!show.post_credit_scenes ? ` Post credit scenes: ${show.post_credit_scenes}` : ''}</Text>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text
              fontWeight={500}>{!!show.release_date ? ` Release Date: ${show.release_date}` : ''}</Text>
            <Text color={"gray.500"}>{` IMDB link, trailer link`}</Text>
          </Stack>
        </Stack>
      </Box>
  );
};
export default Card;
