import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import {
  Box,
  Flex,
  Input,
  FormHelperText,
  FormLabel,
  FormControl,
  Button,
  Text,
  Textarea,
  Radio,
  RadioGroup,
  InputGroup,
  InputRightElement,
  Icon,
  Image,
  IconButton,
} from "@chakra-ui/core";
import Cross from "../asserts/Cross.svg";
function DbForm(props) {
  useEffect(() => {
    props.state.edit = false;
  }, []);
  return (
    <Flex mx="3%">
      <Box width="18%" d={["none", "none", "none", "flex"]}>
        <Link to="/dashboard">
          <Button
            mt="50px"
            border="1px solid #112147"
            backgroundColor="white"
            w="143px"
            h="40px"
          >
            BACK
          </Button>
        </Link>
      </Box>
      <Box w={["100%", "100%", "100%", "82%"]}>
        <form onSubmit={props.onSubmit1}>
          <Text
            color="#104670"
            fontSize="18px"
            fontWeight="bold"
            mt={["24px", "24px", "30px", "55px"]}
          >
            New Debenture Form
          </Text>
          <FormControl mt={6}>
            <FormLabel htmlFor="name" opacity="0.45">
              USER NAME
            </FormLabel>
            <Input
              mt={-4}
              placeholder="User Name"
              variant="flushed"
              name="name"
              id="name"
              value={props.state.name}
              onChange={props.nameChange}
            ></Input>
            <FormHelperText color="red.500">
              {props.state.erroruser}
            </FormHelperText>
          </FormControl>
          <Box d={["", "", "", "flex"]}>
            <Box w={["100%", "100%", "100%", "25%"]}>
              <FormControl mt={6}>
                <FormLabel htmlFor="phone" opacity="0.45">
                  PHONE
                </FormLabel>
                <Input
                  mt={-4}
                  placeholder="PHONE"
                  variant="flushed"
                  name="phone"
                  id="phone"
                  value={props.state.phone}
                  onChange={props.nameChange}
                ></Input>
                <FormHelperText color="red.500">
                  {props.state.errorphone}
                </FormHelperText>
              </FormControl>
            </Box>
            <Box
              w={["100%", "100%", "100%", "70%"]}
              ml={["0%", "0%", "0%", "5%"]}
            >
              <FormControl mt={6}>
                <FormLabel htmlFor="email" opacity="0.45">
                  EMAIL
                </FormLabel>
                <Input
                  mt={-4}
                  placeholder="EMAIL"
                  variant="flushed"
                  name="email"
                  type="email"
                  id="email"
                  value={props.state.email}
                  onChange={props.nameChange}
                ></Input>
                <FormHelperText color="red.500">
                  {props.state.erroremail}
                </FormHelperText>
              </FormControl>
            </Box>
          </Box>
          <FormControl mt={6}>
            <FormLabel htmlFor="type" opacity="0.45">
              DEBENTURE TYPE
            </FormLabel>
            <RadioGroup
              id="type"
              mt={2}
              name="type"
              onChange={props.nameChange}
              value={props.type}
              defaultValue="0"
              spacing={[2, 2, 2, 10]}
              d="flex"
              flexDirection={["column", "column", "column", "row"]}
            >
              <Radio
                variantColor="green"
                value="book"
                mt={-4}
                mr={6}
                isDisabled={props.state.editone ? true : false}
              >
                Book Debenture
              </Radio>
              <Radio
                variantColor="green"
                value="purchase"
                mt={-4}
                isDisabled={props.state.editone ? false : true}
              >
                Purchase Debenture
              </Radio>
            </RadioGroup>
            <FormHelperText color="red.500">
              {props.state.errortype}
            </FormHelperText>
          </FormControl>
          <FormControl mt={2}>
            <FormLabel htmlFor="amount" opacity="0.45">
              DEBENTURE AMOUNT
            </FormLabel>
            <Box id="amount" mt={2} d="flex">
              <InputGroup w={["20%", "20%", "20%", "10%"]}>
                <Input
                  variant="flushed"
                  w="100%"
                  type="number"
                  h="28px"
                  name="amountCount"
                  value={props.state.amountCount}
                  onChange={props.nameChange}
                />
                <InputRightElement
                  children={
                    <Button
                      mb={3}
                      backgroundColor="white"
                      onClick={props.onDownClick}
                    >
                      <Icon name="triangle-down" />
                    </Button>
                  }
                />
              </InputGroup>
              <Image src={Cross} mx={4} />
              <Text mx={2}>1,000</Text>
              <Text mx={2}>=</Text>
              <Input
                variant="flushed"
                w={["20%", "20%", "20%", "10%"]}
                h="28px"
                type="number"
                _readOnly
                value={props.state.amountCount * 1000}
                onChange={props.nameChange}
              />
            </Box>
          </FormControl>
          {props.state.type === "purchase" ? (
            <Box>
              <Text color="grey.200" mt={6} opacity="0.45">
                NOTES
              </Text>
              <Textarea name="notes" onChange={props.nameChange}></Textarea>
            </Box>
          ) : (
            ""
          )}
          {props.state.entry ? (
            <Redirect to="/submit" />
          ) : (
            <Button
              type="submit"
              mt={8}
              mb={2}
              backgroundColor="#1A365D"
              color="white"
              w={["100%", "100%", "100%", "15%"]}
            >
              SUBMIT
            </Button>
          )}
        </form>
      </Box>
    </Flex>
  );
}

export default DbForm;
