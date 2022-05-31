import {
  Box,
  Stack,
  Text,
} from '@chakra-ui/react';


const Footer = () => {
  return (
    <Box
      bg={'pink.50'}
      marginTop={"2%"}
      bottom={0}
      width={'100%'}
      position={'relative'}
    >
      <Stack
        maxW={'100%'}
        py={1}
        spacing={4}
        justify={{ base: 'center', md: 'center' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text
          my={4}
          color={"#EC1C25"}>{`That's it, you are in the endgame now!`}</Text> 
       
      </Stack>
    </Box>
  );
};
export default Footer;
