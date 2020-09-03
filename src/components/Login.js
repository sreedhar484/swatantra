import React from "react";
import logo from "../asserts/Loglogo.svg";
import logbackground from "../asserts/Logbackground.svg";
import {
  Box,
  Image,
  Input,
  FormControl,
  FormHelperText,
  Text,
  Button,
} from "@chakra-ui/core";
import { Redirect } from "react-router-dom";

function Login(props) {
  return (
    <Box
      d="flex"
      w="100%"
      flexDirection={["column", "column", "column", "row"]}
    >
      <Box
        w={["100%", "100%", "100%", "64%"]}
        h={["40%", "40%", "40%", "100%"]}
      >
        <Box
          py={["22%", "22%", "22%", "34%"]}
          px={["15%", "20%", "30%", "35%"]}
        >
          <Image
            src={logo}
            alt="logo"
            w={["244px", "244px", "244px", "349px"]}
            h={["74px", "74px", "74px", "104px"]}
          />
        </Box>
      </Box>
      <Box
        backgroundColor="#112147"
        w={["100%", "100%", "100%", "36%"]}
        h={["60%", "60%", "60%", "100%"]}
        color="white"
      >
        <Box
          h="60%"
          d={["none", "none", "none", "flex"]}
          justifyContent="flex-end"
        >
          <Image src={logbackground} alt="background" float="right"></Image>
        </Box>
        <Box mx={["25px", "25px", "25px", "40px"]}>
          <form onSubmit={props.btnClick}>
            <Text
              fontSize="30px"
              // fontFamily="NotoSansJP-Bold"
              color="#7EAACD"
              fontWeight="bold"
              letterSpacing="1.2px"
              mt="20%"
            >
              LOGIN
            </Text>
            <FormControl mt="12%">
              <Input
                variant="flushed"
                type="text"
                placeholder="USER NAME"
                name="userName"
                value={props.state.userName}
                onChange={props.changeHandle}
                borderColor={
                  props.state.erroru ? "crimson" : "rgba(255,255,255,0.24)"
                }
                focusBorderColor={props.state.erroru ? "crimson" : "#2A69AC"}
              ></Input>
              <FormHelperText color="red.500">
                {props.state.errorum}
              </FormHelperText>
            </FormControl>
            <FormControl mt="14%">
              <Input
                type="password"
                variant="flushed"
                placeholder="PASSWORD"
                name="password"
                value={props.state.password}
                onChange={props.changeHandle}
                borderColor={
                  props.state.errorp ? "crimson" : "rgba(255,255,255,0.24)"
                }
                focusBorderColor={props.state.errorp ? "crimson" : "#2A69AC"}
              ></Input>
              <FormHelperText color="red.500">
                {props.state.errorpm}
              </FormHelperText>
            </FormControl>
            {props.state.log ? (
              <Redirect to="/dashboard" />
            ) : (
              <Button
                type="submit"
                mt="14%"
                mb="16%"
                backgroundColor="white"
                fontFamily="Rubik-Regular"
                fontSize="18px"
                color="#112147"
                borderRadius="4px"
                width="114px"
                h="44px"
              >
                Login
              </Button>
            )}
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
