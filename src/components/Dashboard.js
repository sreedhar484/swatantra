import React, { useState } from "react";
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
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  DrawerOverlay,
  Checkbox,
  useDisclosure,
  CheckboxGroup,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
} from "@chakra-ui/core";
import Plus from "../asserts/Plus.svg";
import Sort from "../asserts/Sort.svg";
import FilterIcon from "../asserts/Filter.svg";
import FilterIcon1 from "../asserts/FilterM.svg";
import ReactPaginate from "react-paginate";
import "../App.css";
function Dashboard(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchVal, onSearchClick] = useState(false);
  console.log(searchVal);
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
          <Text alignSelf="center">
            {props.state.array.length} potential buyers
          </Text>
          <Text alignSelf="center">
            &#8377; {props.state.totalpledged} pledged amount
          </Text>
        </Box>
        <Box
          mx="10px"
          d={["flex", "flex", "flex", "none"]}
          justifyContent="center"
        >
          <Text alignSelf="center">
            &#8377; {props.state.totalpledged} pledged by{" "}
            {props.state.array.length} buyers
          </Text>
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
            &#8377; {props.state.totalrecieved} Realized Amount
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
          {searchVal ? (
            <InputGroup d={["flex", "flex", "flex", "none"]} w="100%">
              <InputLeftElement
                children={<Icon name="search" mb={4} color="#112147" />}
              />
              <Input
                variant="flushed"
                w="100%"
                type="text"
                h="24px"
                placeholder="Search Entry"
                name="search"
              />
            </InputGroup>
          ) : (
            <Text mr={4} fontSize={["12px", "12px", "12px", "18px"]}>
              ALL DEBENTURE BUYERS
            </Text>
          )}
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
            {searchVal ? (
              ""
            ) : (
              <IconButton
                icon="search"
                backgroundColor="white"
                h="24px"
                onClick={() => onSearchClick(!searchVal)}
              ></IconButton>
            )}
            <Button backgroundColor="white" h="24px">
              <Image src={FilterIcon1} onClick={onOpen} />
            </Button>
            <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent
                backgroundColor="#112147"
                borderRadius="20px 20px 0 0"
                color="white"
              >
                <DrawerBody>
                  <Box d="flex">
                    <Text>FILTERS</Text>
                    <DrawerCloseButton />
                  </Box>
                  <FormControl mt={6}>
                    <FormLabel htmlFor="type" opacity="0.45">
                      Name
                    </FormLabel>
                    <RadioGroup
                      id="type"
                      name="type"
                      defaultValue="0"
                      spacing={[2, 2, 2, 10]}
                      isInline
                    >
                      <Radio variantColor="green" value="nasci">
                        Ascinding
                      </Radio>
                      <Radio variantColor="green" value="ndsci">
                        Descinding
                      </Radio>
                    </RadioGroup>
                  </FormControl>

                  <FormControl mt={6}>
                    <FormLabel htmlFor="ptype" opacity="0.45">
                      Pledged Amount
                    </FormLabel>
                    <RadioGroup
                      id="ptype"
                      name="ptype"
                      defaultValue="0"
                      spacing={[2, 2, 2, 10]}
                      isInline
                    >
                      <Radio variantColor="green" value="pasci">
                        Ascinding
                      </Radio>
                      <Radio variantColor="green" value="pdsci">
                        Descinding
                      </Radio>
                    </RadioGroup>
                  </FormControl>
                  <CheckboxGroup variantColor="green" defaultValue={["all"]}>
                    <Box d="flex" mt={4}>
                      <Checkbox value="custom" variantColor="green" mr={8}>
                        CUSTOME
                      </Checkbox>
                      <Input variant="flushed" w="20%" mt={-4} />
                      <Text mt={-4}>To</Text>
                      <Input variant="flushed" w="20%" mt={-4} />
                    </Box>
                    <Checkbox value="all">ALL</Checkbox>
                    <Checkbox value="one">10,000-19,000</Checkbox>
                    <Checkbox value="two">20,000-49,000</Checkbox>
                    <Checkbox value="three">50,000-1,00,000</Checkbox>
                  </CheckboxGroup>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
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
            templateRows={"repeat(" + (props.state.cou.length + 1) + ",1fr)"}
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
                <Text ml={2}>NAME</Text>
                <Popover>
                  <PopoverTrigger>
                    <Button backgroundColor="#112147" mt={-1} size="sm">
                      <Image src={Sort}></Image>
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
                        Ascinding
                      </Button>
                      <br></br>
                      <Button
                        icon="delete"
                        backgroundColor="teal.500"
                        border="none"
                      >
                        Descinding
                      </Button>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Box>
              <Text>PHONE</Text>
              <Text>EMAIL</Text>
              <Box d="flex">
                <Text>PLEDGED AMOUNT</Text>
                <Popover>
                  <PopoverTrigger>
                    <Button backgroundColor="#112147" mt={-1} size="sm">
                      <Image src={Sort}></Image>
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
                        Ascinding
                      </Button>
                      <br></br>
                      <Button
                        icon="delete"
                        backgroundColor="teal.500"
                        border="none"
                      >
                        Descinding
                      </Button>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>

                <Popover>
                  <PopoverTrigger>
                    <Button backgroundColor="#112147" mt={-1} size="10px">
                      <Image src={FilterIcon}></Image>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    zIndex={4}
                    backgroundColor="teal.500"
                    w="200px"
                  >
                    <PopoverArrow />
                    <PopoverBody color="white">
                      <CheckboxGroup
                        variantColor="green"
                        defaultValue={["all"]}
                      >
                        <Checkbox value="custom">CUSTOME</Checkbox>
                        <Box d="flex">
                          <Input variant="flushed" w="40%" />
                          <Text>To</Text>
                          <Input variant="flushed" w="40%" />
                        </Box>
                        <Checkbox value="all">ALL</Checkbox>
                        <Checkbox value="one">10,000-19,000</Checkbox>
                        <Checkbox value="two">20,000-49,000</Checkbox>
                        <Checkbox value="three">50,000-1,00,000</Checkbox>
                      </CheckboxGroup>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Box>
              <Box d="flex">
                <Text>PLEDGED DATE</Text>
                <Popover>
                  <PopoverTrigger>
                    <Button backgroundColor="#112147" mt={-1} size="sm">
                      <Image src={Sort}></Image>
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
                        Ascinding
                      </Button>
                      <br></br>
                      <Button
                        icon="delete"
                        backgroundColor="teal.500"
                        border="none"
                      >
                        Descinding
                      </Button>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Box>
              <Box d="flex">
                <Text>RECIEVED AMOUNT</Text>
                <Popover>
                  <PopoverTrigger>
                    <Button backgroundColor="#112147" mt={-1} size="sm">
                      <Image src={Sort}></Image>
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
                        Ascinding
                      </Button>
                      <br></br>
                      <Button
                        icon="delete"
                        backgroundColor="teal.500"
                        border="none"
                      >
                        Descinding
                      </Button>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>

                <Popover>
                  <PopoverTrigger>
                    <Button backgroundColor="#112147" mt={-1} size="10px">
                      <Image src={FilterIcon}></Image>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    zIndex={4}
                    backgroundColor="teal.500"
                    w="200px"
                  >
                    <PopoverArrow />
                    <PopoverBody color="white">
                      <CheckboxGroup
                        variantColor="green"
                        defaultValue={["all"]}
                      >
                        <Checkbox value="custom">CUSTOME</Checkbox>
                        <Box d="flex">
                          <Input variant="flushed" w="40%" />
                          <Text>To</Text>
                          <Input variant="flushed" w="40%" />
                        </Box>
                        <Checkbox value="all">ALL</Checkbox>
                        <Checkbox value="one">10,000-19,000</Checkbox>
                        <Checkbox value="two">20,000-49,000</Checkbox>
                        <Checkbox value="three">50,000-1,00,000</Checkbox>
                      </CheckboxGroup>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Box>
              <Box d="flex">
                <Text>RECIEVED DATE</Text>
                <Popover>
                  <PopoverTrigger>
                    <Button backgroundColor="#112147" mt={-1} size="sm">
                      <Image src={Sort}></Image>
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
                        Ascinding
                      </Button>
                      <br></br>
                      <Button
                        icon="delete"
                        backgroundColor="teal.500"
                        border="none"
                      >
                        Descinding
                      </Button>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Box>
              <Box d="flex">
                <Text>STATUS</Text>
                <Popover>
                  <PopoverTrigger>
                    <Button backgroundColor="#112147" mt={-1} size="sm">
                      <Image src={FilterIcon}></Image>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    zIndex={4}
                    backgroundColor="teal.500"
                    w="150px"
                  >
                    <PopoverArrow />
                    <PopoverBody color="white">
                      <CheckboxGroup
                        variantColor="green"
                        defaultValue={["all"]}
                      >
                        <Checkbox value="all">ALL</Checkbox>
                        <Checkbox value="recieved">RECIEVED</Checkbox>
                        <Checkbox value="pledged">PLEDGED</Checkbox>
                        <Checkbox value="increased">INCREASED</Checkbox>
                        <Checkbox value="reduced">REDUCED</Checkbox>
                      </CheckboxGroup>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Box>
            </Grid>
            {/* Table Body */}
            {props.state.cou.map((data, idx) => (
              <Grid
                w="100%"
                fontSize="14px"
                templateColumns="repeat(8, 1fr)"
                gap={2}
                alignItems="center"
                h="40px"
              >
                <Text ml={2}>{data.Name}</Text>
                <Text>{data.phone}</Text>
                <Text overflow="hidden" textOverflow="ellipsis">
                  {data.email}
                </Text>
                <Text textAlign="center">{data.pledgedAmount}</Text>
                <Text>{data.pledgedDate}</Text>
                <Text textAlign="center">{data.recievedAmount}</Text>
                <Text>{data.recievedDate}</Text>
                <Box d="flex">
                  <Image src={Sort} mr={2}></Image>
                  <Text mt={1}>{data.status}</Text>
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
            ))}
          </Grid>
        </Box>
        <Box
          d={["none", "none", "none", "flex"]}
          float="right"
          border="1px solid grey"
          color="blue.800"
          mr={4}
          mt={4}
          h={8}
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
      </Box>
    </Box>
  );
}

export default Dashboard;
