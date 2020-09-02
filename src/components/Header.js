import React from "react";
import { Box, Image, Text } from "@chakra-ui/core";
import logo from "../asserts/Logo.svg";
import "../App.css";

function Header() {
  return (
    <div className="header">
      <Box
        h={["60px", "60px", "60px", "106px"]}
        w="100%"
        backgroundColor="#112147"
        borderRadius={["0px", "0px", "0px", "0px"]}
      >
        <Box
          py={4}
          ml="10px"
          mr="40px"
          d={["none", "none", "none", "flex"]}
          justifyContent="space-between"
        >
          <Box>
            <Image src={logo} ml="30px" />
          </Box>
          <Box d="flex">
            <Box my="7px" w="80px">
              <Image
                w="60px"
                h="60px"
                border="1px solid white"
                borderRadius="50%"
              />
            </Box>
            <Box>
              <Text
                fontFamily="Rubik-Medium"
                fontSize="20px"
                color="#FFFFFF"
                mt="11px"
              >
                Malla Reddy
              </Text>
              <Text fontFamily="Rubik-Regular" fontSize="16px" color="#FFFFFF">
                CEO
              </Text>
            </Box>
          </Box>
        </Box>
        <Box py="12px" ml="16px">
          <Image
            w="36px"
            h="36px"
            border="1px solid white"
            borderRadius="50%"
            d={["flex", "flex", "flex", "none"]}
          />
        </Box>
      </Box>
    </div>
  );
}

export default Header;
