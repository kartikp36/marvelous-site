import React from "react";
import { Input } from "@chakra-ui/input";
import {
  FormControl,
  Select,
  RadioGroup,
  Stack,
  Radio,
  Box,
  InputRightElement,
  InputGroup,
  IconButton,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { inject } from "mobx-react";
import { MdClear } from "@react-icons/all-files/md/MdClear";
import { MdSearch } from "@react-icons/all-files/md/MdSearch";

const Form = inject(
  "ShowStore",
  "ParamsStore"
)(
  observer(({ ShowStore, ParamsStore }) => {
    const { getShows } = ShowStore;
    let { updateChronology, updateSearchInput, updateType, searchInput } =
      ParamsStore;
    const { updateShowStore } = ShowStore;
    const handleChange = (e) => {
      updateSearchInput(e.target.value ? e.target.value : "");
    };

    const handleRadioChange = (order) => {
      updateChronology(order);
      getShows();
    };

    const handleSelectChange = (e) => {
      updateType(e.target.value);
      updateShowStore([]);
      getShows();
    };
    const handleSubmit = (e) => {
      getShows();
    };

    return (
      <Box maxW={"50%"} margin={"auto"} marginTop={"2%"}>
        <FormControl isRequired>
          <Box display={"inline-flex"}>
            <InputGroup size="lg" width={"auto"}>
              <Input
                focusBorderColor="pink.200"
                id="search"
                placeholder="Search"
                value={searchInput}
                onChange={handleChange}
              />
              <InputRightElement width="auto" marginRight={2}>
                {searchInput.length > 0 && (
                  <IconButton
                    marginRight={2}
                    backgroundColor={"transparent"}
                    size="md"
                    _hover={{ backgroundColor: "gray.200" }}
                    icon={<MdClear size={"1.6em"} />}
                    onClick={() => {
                      updateSearchInput("");
                      handleSubmit();
                    }}></IconButton>
                )}
                <IconButton
                  backgroundColor={"#67C7EB"}
                  color={"white"}
                  icon={<MdSearch size={"1.6em"} />}
                  _hover={{ backgroundColor: "#6A0C0B" }}
                  type={"submit"}
                  onClick={handleSubmit}></IconButton>
              </InputRightElement>
            </InputGroup>
          </Box>
          <Box display={"block"} textAlign={"-webkit-center"} margin={"8px"}>
            <Select
              id="show"
              maxW={{ sm: "48%", md: "40%", lg: "24%" }}
              onChange={handleSelectChange}>
              <option value={"movies"}>Movies</option>
              <option value={"tvshows"}>Series</option>
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
                <Radio
                  colorScheme="cyan"
                  value="ASC"
                  marginRight={{ sm: "2%", md: "20px", lg: "32px" }}>
                  Old
                </Radio>
                <Radio colorScheme="teal" value="DESC">
                  Latest
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
