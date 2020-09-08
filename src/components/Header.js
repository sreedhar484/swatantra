import React from "react";
import { Box, Image, Text, Icon, Button } from "@chakra-ui/core";
import logo from "../asserts/Logo.svg";
import "../App.css";
import ReactPaginate from "react-paginate";

function Header(props) {
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
                // mt="11px"
              >
                {props.state.userName}
              </Text>
              <Text fontFamily="Rubik-Regular" fontSize="16px" color="#FFFFFF">
                CEO
              </Text>
              <Button
                h={6}
                color="white"
                backgroundColor="#112147"
                justifyContent="left"
                ml={-4}
                onClick={props.onLogout}
              >
                LOGOUT
              </Button>
            </Box>
          </Box>
        </Box>
        <Box py="12px" ml="16px" d="flex" justifyContent="space-between">
          <Image
            w="36px"
            h="36px"
            border="1px solid white"
            borderRadius="50%"
            d={["flex", "flex", "flex", "none"]}
          />
          <Box d={["flex", "flex", "flex", "none"]} mt={1} mr="20px">
            <Box
              d={["flex", "flex", "flex", "none"]}
              float="right"
              border="1px solid white"
              color="white"
              h={8}
              mr={2}
              borderRadius="5px"
            >
              <ReactPaginate
                previousLabel={<Icon name="chevron-left" />}
                nextLabel={<Icon name="chevron-right" />}
                breakLabel={"/ " + props.state.pageCount}
                pageCount={props.state.pageCount}
                marginPagesDisplayed={0}
                pageRangeDisplayed={0}
                onPageChange={props.handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
              />
            </Box>
            <Button
              h={8}
              // border="1px solid white"
              color="white"
              backgroundColor="#112147"
              onClick={props.onLogout}
            >
              Logout
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Header;
