import React from "react";
import {
  Box,
  Button,
  Input,
  Grid,
  Text,
  Image,
  InputLeftElement,
  InputGroup,
  Icon,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/core";
import Plus from "../asserts/Plus.svg";
import Sort from "../asserts/Sort.svg";
import FilterIcon from "../asserts/Filter.svg";
import FilterIcon1 from "../asserts/FilterM.svg";
function Dashboard() {
  return (
    <Box mx={["16px", "16px", "16px", "40px"]}>
      {/* button in mobile view */}
      <Button
        mt="16px"
        d={["flex", "flex", "flex", "none"]}
        h="40px"
        w="100%"
        border="1px solid #112147"
        backgroundColor="white"
        borderRadius="4px"
        boxShadow="0 0 7px 2px rgba(0,0,0,0.12)"
      >
        <Image src={Plus} mr="8px" />
        ADD NEW ENTRY
      </Button>
      {/* total amount */}
      <Grid
        templateColumns={["50% 50%", "50% 50%", "50% 50%", "72% 28%"]}
        w="100%"
        h={["55px", "55px", "55px", "74px"]}
        mt={["12px", "12px", "12px", "24px"]}
        boxShadow=" 0 0 7px 2px rgba(0,0,0,0.12)"
        borderRadius={["4px", "4px", "4px", "6px"]}
      >
        <Box
          mx="24px"
          d={["none", "none", "none", "flex"]}
          justifyContent="space-between"
        >
          <Text alignSelf="center">104 potential buyers</Text>
          <Text alignSelf="center">1234 pledged amount</Text>
        </Box>
        <Box
          mx="10px"
          d={["flex", "flex", "flex", "none"]}
          justifyContent="center"
        >
          <Text alignSelf="center">12345 pledged by 104 buyers</Text>
        </Box>

        <Box
          //   backgroundColor="#7EAACD"
          backgroundColor="#F0F5FA"
          opacity="0.8"
          border="1px solid #F0F5FA"
        >
          <Text
            textAlign="center"
            color="#112147"
            mt={["2px", "2px", "12px", "25px"]}
          >
            12345 Realized Amount
          </Text>
        </Box>
      </Grid>
      {/* search */}
      <Box
        mt={["28px", "28px", "28px", "40px"]}
        h={["24px", "24px", "24px", "30px"]}
        d="flex"
        justifyContent="space-between"
      >
        <Box d="flex">
          <Text mr={4} fontSize={["12px", "12px", "12px", "18px"]}>
            ALL DEBENTURE BUYERS
          </Text>
          <Button
            d={["none", "none", "none", "flex"]}
            h="24px"
            w="165px"
            border="1px solid #112147"
            backgroundColor="white"
            borderRadius="4px"
          >
            <Image src={Plus} mr="8px" color="#112147" />
            ADD NEW ENTRY
          </Button>
        </Box>
        <Box>
          <Box d={["flex", "flex", "flex", "none"]}>
            <IconButton
              icon="search"
              backgroundColor="white"
              h="24px"
            ></IconButton>
            <Button backgroundColor="white" h="24px">
              <Image src={FilterIcon1} />
            </Button>
          </Box>
          <InputGroup d={["none", "none", "none", "flex"]}>
            <InputLeftElement
              children={<Icon name="search" mb={3} color="#112147" />}
            />
            <Input
              variant="flushed"
              w="100%"
              type="text"
              h="24px"
              placeholder="Search Entry"
              name="amountCount"
            />
          </InputGroup>
        </Box>
      </Box>
      {/* table */}
      <Box mt="16px">
        {/* table in mobile view */}
        <Grid
          templateRows="1fr"
          gap="15px"
          d={["grid", "grid", "grid", "none"]}
        >
          <Box boxShadow="0 0 7px 2px rgba(80,80,80,0.10)" borderRadius="4px">
            <Box
              d="flex"
              h="35px"
              px="12px"
              justifyContent="space-between"
              backgroundColor="#F0F5FA"
              alignItems="center"
            >
              <Text>Sreedhar</Text>
              <Text>RECIEVED</Text>
            </Box>
            <Grid templateColumns="1fr 1fr" px="12px">
              <Box my={4}>
                <Text>Recieved Amount</Text>
                <Text mt={2}>12345</Text>
              </Box>
              <Box my={4}>
                <Text>Recieved Amount</Text>
                <Text mt={2}>12345</Text>
              </Box>
            </Grid>
          </Box>
        </Grid>
        {/* Table in laptop */}
        <Box d={["none", "none", "none", "flex"]} w="100%">
          <Grid
            templateRows="1fr 1fr"
            border="1px solid #112147"
            borderRadius="6px"
            w="100%"
          >
            {/* table header */}
            <Grid
              w="100%"
              h="50px"
              fontSize="14px"
              templateColumns="repeat(8, 1fr)"
              gap={2}
              backgroundColor="#112147"
              color="white"
              border="1px solid #112147"
              alignItems="center"
            >
              <Box d="flex">
                <Text mx={2}>NAME</Text>
                <Image src={Sort}></Image>
              </Box>
              <Text>PHONE</Text>
              <Text>EMAIL</Text>
              <Box d="flex">
                <Text mr={2}>PLEDGED AMOUNT</Text>
                <Image src={Sort} mr={2}></Image>
                <Image src={FilterIcon}></Image>
              </Box>
              <Box d="flex">
                <Text mr={2}>PLEDGED DATE</Text>
                <Image src={Sort}></Image>
              </Box>
              <Box d="flex">
                <Text mr={2}>RECIEVED AMOUNT</Text>
                <Image src={Sort} mr={2}></Image>
                <Image src={FilterIcon}></Image>
              </Box>
              <Box d="flex">
                <Text mr={2}>RECIEVED DATE</Text>
                <Image src={Sort}></Image>
              </Box>
              <Box d="flex">
                <Text mr={2}>STATUS</Text>
                <Image src={FilterIcon}></Image>
              </Box>
            </Grid>
            {/* Table Body */}
            <Grid
              w="100%"
              fontSize="14px"
              templateColumns="repeat(8, 1fr)"
              gap={2}
              alignItems="center"
              h="40px"
            >
              <Text ml={2}>Sreedhar</Text>
              <Text>1234567890</Text>
              <Text overflow="hidden" textOverflow="ellipsis">
                sreedharr484@gmail.com
              </Text>
              <Text textAlign="center">12345</Text>
              <Text>12 Mar 2020</Text>
              <Text textAlign="center">12345</Text>
              <Text>12 Mar 202</Text>
              <Box d="flex">
                <Image src={Sort} mr={2}></Image>
                <Text mt={1}>RECIEVED</Text>
                <Popover>
                  <PopoverTrigger>
                    <Button backgroundColor="white" size="sm">
                      <Image src={FilterIcon} />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    zIndex={4}
                    backgroundColor="teal.500"
                    w="150px"
                  >
                    <PopoverArrow />
                    <PopoverBody color="white">
                      <Button backgroundColor="teal.500" border="none">
                        <Icon name="edit" mr={2} />
                        Edit
                      </Button>
                      <br></br>
                      <Button
                        icon="delete"
                        backgroundColor="teal.500"
                        border="none"
                      >
                        <Icon name="delete" mr={2}></Icon>Delete
                      </Button>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
