import React from "react";
import { Input } from "@chakra-ui/input";
import {
  FormControl,
  FormLabel,
  Select,
  RadioGroup,
  Stack,
  Radio,
  Box,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";

const Form = observer((props) => (
  <Box maxW={"50%"} margin={"auto"} marginTop={"2%"}>
    <FormControl isRequired>
      <Input id="search" placeholder="Search" />
      <Select id="show" placeholder="Movies/Series">
        <option>Movies</option>
        <option>Series</option>
      </Select>
      <RadioGroup defaultValue="1" marginX={"auto"}>
        <Stack spacing={5} direction="row" justifyContent={"center"}>
          <Radio colorScheme="cyan" value="1">
            Ascending
          </Radio>
          <Radio colorScheme="teal" value="2">
            Descending
          </Radio>
        </Stack>
      </RadioGroup>
    </FormControl>
  </Box>
));

export default Form;
