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
  Button,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { inject } from "mobx-react";

const Form = inject(
  "ShowStore",
  "ParamsStore"
)(
  observer(({ ShowStore, ParamsStore }) => {
    const { getShows } = ShowStore;
    const {
      updateChronology,
      updateSearchInput,
      getShowsFilter,
      updatePage,
      updateType,
      searchInput,
    } = ParamsStore;
    let params = JSON.parse(JSON.stringify(ParamsStore));
    const handleChange = (e) => {
      updateSearchInput(e.target.value ? e.target.value : "");
      console.log(searchInput);
    };

    const handleRadioChange = (order) => {
      updateChronology(order);
      getShows();
    };

    const handleSubmit = (e) => {
      getShows();
    };

    return (
      <Box maxW={"50%"} margin={"auto"} marginTop={"2%"}>
        <FormControl isRequired>
          <Box display={"inline-flex"}>
            <Input
              id="search"
              placeholder="Search"
              value={searchInput}
              onChange={handleChange}
            />
            <Button
              backgroundColor={"#67C7EB"}
              color={"white"}
              _hover={{ backgroundColor: "#6A0C0B" }}
              type={"submit"}
              onClick={handleSubmit}>
              Search
            </Button>{" "}
          </Box>
          <Box display={"block"} textAlign={"-webkit-center"} margin={"8px"}>
            <Select id="show" maxW={"20%"}>
              <option>Movies</option>
              <option>Series</option>
            </Select>
            <Stack
              spacing={6}
              direction="row"
              justifyContent={"center"}
              margin={"8px"}>
              <RadioGroup
                id={"radio"}
                defaultValue="ASC"
                onChange={handleRadioChange}>
                <Radio colorScheme="cyan" value="ASC" marginRight={"32px"}>
                  Ascending
                </Radio>
                <Radio colorScheme="teal" value="DESC">
                  Descending
                </Radio>
              </RadioGroup>
            </Stack>
          </Box>
        </FormControl>
      </Box>
    );
  })
);

export default Form;
