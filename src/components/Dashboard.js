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
  FormHelperText,
} from "@chakra-ui/core";
import Plus from "../asserts/Plus.svg";
import Sort from "../asserts/Sort.svg";
import FilterIcon from "../asserts/Filter.svg";
import FilterIcon1 from "../asserts/FilterM.svg";
import ReactPaginate from "react-paginate";
import "../App.css";
import PledgedIcon from "../asserts/Pledged.svg";
import RecievedIcon from "../asserts/Recieved.svg";
import ReducedIcon from "../asserts/Reduced.svg";
import IncreasedIcon from "../asserts/Increased.svg";
import Filters from "../asserts/Filters.svg";
import { Link, Redirect } from "react-router-dom";
import { AiOutlineEllipsis } from "react-icons/ai";
function Dashboard(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchVal, onSearchClick] = useState(false);
  const [filterValname, onFilterName] = useState();
  const [filterValpledged, onFilterPledged] = useState();
  const [statusVal1, statusFilter1] = useState();
  const [statusVal2, statusFilter2] = useState();
  const [statusVal3, statusFilter3] = useState();
  const [statusVal4, statusFilter4] = useState();
  const [statusVal5, statusFilter5] = useState();
  return (
    <Box mx={["16px", "16px", "16px", "40px"]}>
      {/* button in mobile view */}
      <Link to="/newentry">
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
      </Link>
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
          <Box alignSelf="center" d="flex">
            <Text mr={2} fontSize="30px">
              {props.state.array.length}
            </Text>
            <Text alignSelf="center">potential buyers</Text>
          </Box>
          <Text alignSelf="center" fontSize="20px">
            &#8377; {props.state.totalpledged} pledged amount
          </Text>
        </Box>
        <Box
          mx="10px"
          d={["flex", "flex", "flex", "none"]}
          justifyContent="center"
        >
          <Box alignSelf="center">
            <Text textAlign="center" color="#000F00">
              &#8377; {props.state.totalpledged} pledged
            </Text>
            <Text textAlign="center" color="#000F00">
              {props.state.array.length} buyers
            </Text>
          </Box>
        </Box>

        <Box
          //   backgroundColor="#7EAACD"
          backgroundColor="#F0F5FA"
          opacity="0.8"
          border="1px solid #F0F5FA"
        >
          <Box
            color="#112147"
            d="flex"
            flexDirection={["column", "column", "column", "row"]}
            mt={["3px", "3px", "3px", "13px"]}
            justifyContent="center"
          >
            <Text
              mr={2}
              fontSize={["18px", "18px", "22px", "25px"]}
              alignSelf="center"
              color="#000F00"
            >
              &#8377; {props.state.totalrecieved}
            </Text>
            <Text
              alignSelf="center"
              color="#000F00"
              fontSize={["15px", "15px", "15px", "20px"]}
            >
              Realized Amount
            </Text>
          </Box>
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
            <InputGroup
              d={["flex", "flex", "flex", "none"]}
              w="100%"
              flexDirection="column"
            >
              <InputLeftElement
                children={<Icon name="search" mb={4} color="#112147" />}
              />
              <Input
                variant="flushed"
                w="100%"
                type="text"
                h="24px"
                value={props.state.search}
                placeholder="Search Entry"
                name="search"
                onChange={props.searchEvent}
              />
              <FormHelperText d={props.state.search1 ? "none" : "flex"}>
                {props.state.cou.length} results found
              </FormHelperText>
            </InputGroup>
          ) : (
            <Text mr={4} fontSize={["12px", "12px", "12px", "18px"]}>
              ALL DEBENTURE BUYERS
            </Text>
          )}
          <Link to="/newentry">
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
          </Link>
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
                    <Image src={Filters} mr={2} />
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
                      value={filterValname}
                      onChange={(e) => onFilterName(e.target.value)}
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
                      value={filterValpledged}
                      spacing={[2, 2, 2, 10]}
                      isInline
                      onChange={(e) => onFilterPledged(e.target.value)}
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
                  <Button
                    backgroundColor="#112147"
                    width="100%"
                    border="1px solid white"
                    onClick={() =>
                      props.onFilterChange(filterValname, filterValpledged)
                    }
                  >
                    APPLY
                  </Button>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>
          <FormControl d={["none", "none", "none", "flex"]}>
            <FormHelperText d={props.state.search1 ? "none" : "flex"}>
              {props.state.cou.length} results found
            </FormHelperText>
            <InputGroup>
              <InputLeftElement
                children={<Icon name="search" mb={3} color="#112147" />}
              />
              <Input
                variant="flushed"
                w="100%"
                type="text"
                h="24px"
                value={props.state.search}
                placeholder="Search Entry"
                name="search"
                onChange={props.searchEvent}
              />
            </InputGroup>
          </FormControl>
        </Box>
      </Box>
      {/* table */}
      <Box mt="25px">
        {/* table in mobile view */}
        <Grid
          templateRows={"repeat(" + props.state.cou.length + ",1fr)"}
          gap="15px"
          d={["grid", "grid", "grid", "none"]}
        >
          {props.state.cou.map((data, idx) => (
            <Box
              boxShadow="0 0 7px 2px rgba(80,80,80,0.10)"
              borderRadius="4px"
              key={idx}
            >
              <Box
                d="flex"
                h="35px"
                px="12px"
                justifyContent="space-between"
                backgroundColor="#F0F5FA"
                alignItems="center"
              >
                <Text>{data.userName}</Text>
                <Box d="flex">
                  {data.status === "pledged" ? (
                    <Box d="flex">
                      <Image src={PledgedIcon} mr={1} />
                      <Text color="#ED8F05">{data.status.toUpperCase()}</Text>
                    </Box>
                  ) : data.status === "Recieved" ? (
                    <Box d="flex">
                      <Image src={RecievedIcon} mr={1} />
                      <Text color="green.500">{data.status.toUpperCase()}</Text>
                    </Box>
                  ) : data.status === "Reduced" ? (
                    <Box d="flex">
                      <Image src={ReducedIcon} mr={1} />
                      <Text color="#00B4BD">{data.status.toUpperCase()}</Text>
                    </Box>
                  ) : (
                    <Box d="flex">
                      <Image src={IncreasedIcon} mr={1} />
                      <Text color="#00B4BD">{data.status.toUpperCase()}</Text>
                    </Box>
                  )}
                </Box>
              </Box>
              <Grid templateColumns="1fr 1fr" px="12px">
                <Box my={4}>
                  <Text>
                    {data.status === "pledged"
                      ? "Pledged Amount"
                      : "Recieved Amount"}
                  </Text>
                  <Text mt={2}>
                    {data.status === "pledged"
                      ? data.pledgedAmount
                      : data.recievedAmount}
                  </Text>
                </Box>
                <Box my={4}>
                  <Text>
                    {data.status === "Pledged"
                      ? "Pledged Date"
                      : "Recieved Date"}
                  </Text>
                  <Text mt={2}>
                    {data.status === "Pledged"
                      ? data.pledgedDate
                      : data.recievedDate}
                  </Text>
                </Box>
              </Grid>
            </Box>
          ))}
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
                      <Button
                        backgroundColor="teal.500"
                        border="none"
                        onClick={props.nameAsci}
                      >
                        Ascinding
                      </Button>
                      <br></br>
                      <Button
                        backgroundColor="teal.500"
                        border="none"
                        onClick={props.nameDsci}
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
                      <Button
                        backgroundColor="teal.500"
                        border="none"
                        onClick={props.pledgedAsci}
                      >
                        Ascinding
                      </Button>
                      <br></br>
                      <Button
                        icon="delete"
                        backgroundColor="teal.500"
                        border="none"
                        onClick={props.pledgedDsci}
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
                      <Button
                        backgroundColor="teal.500"
                        border="none"
                        onClick={props.pledgedDateAsci}
                      >
                        Ascinding
                      </Button>
                      <br></br>
                      <Button
                        backgroundColor="teal.500"
                        border="none"
                        onClick={props.pledgedDateDsci}
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
                      <Button
                        backgroundColor="teal.500"
                        border="none"
                        onClick={props.recievedAsci}
                      >
                        Ascinding
                      </Button>
                      <br></br>
                      <Button
                        icon="delete"
                        backgroundColor="teal.500"
                        border="none"
                        onClick={props.recievedDsci}
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
                      <Button
                        backgroundColor="teal.500"
                        border="none"
                        onClick={props.recievedDateAsci}
                      >
                        Ascinding
                      </Button>
                      <br></br>
                      <Button
                        backgroundColor="teal.500"
                        border="none"
                        onClick={props.recievedDateDsci}
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
                        <Checkbox
                          value="all"
                          onChange={(event) =>
                            statusFilter1(event.target.checked)
                          }
                        >
                          ALL
                        </Checkbox>
                        <Checkbox
                          value="recieved"
                          onChange={(event) =>
                            statusFilter2(event.target.checked)
                          }
                        >
                          RECIEVED
                        </Checkbox>
                        <Checkbox
                          value="pledged"
                          onChange={(event) =>
                            statusFilter3(event.target.checked)
                          }
                        >
                          PLEDGED
                        </Checkbox>
                        <Checkbox
                          value="increased"
                          onChange={(event) =>
                            statusFilter4(event.target.checked)
                          }
                        >
                          INCREASED
                        </Checkbox>
                        <Checkbox
                          value="reduced"
                          onChange={(event) =>
                            statusFilter5(event.target.checked)
                          }
                        >
                          REDUCED
                        </Checkbox>
                      </CheckboxGroup>
                      <Button backgroundColor="teal.500" ml={3}>
                        APPLY
                      </Button>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Box>
            </Grid>
            {/* Table Body */}
            {props.state.cou.map((data, idx) => (
              <Grid
                key={idx}
                w="100%"
                fontSize="14px"
                templateColumns="repeat(8, 1fr)"
                gap={2}
                alignItems="center"
                h="40px"
              >
                <Text ml={2}>{data.userName}</Text>
                <Text>{data.phone}</Text>
                <Text overflow="hidden" textOverflow="ellipsis">
                  {data.email}
                </Text>
                <Text textAlign="center">{data.pledgedAmount}</Text>
                <Text>{data.pledgedDate}</Text>
                <Text textAlign="center">{data.recievedAmount}</Text>
                <Text>{data.recievedDate}</Text>
                <Box d="flex">
                  {data.status === "pledged" ? (
                    <Box d="flex">
                      <Image src={PledgedIcon} mr={1} />
                      <Text mt={1} color="#ED8F05">
                        {data.status.toUpperCase()}
                      </Text>
                    </Box>
                  ) : data.status === "Recieved" ? (
                    <Box d="flex">
                      <Image src={RecievedIcon} mr={1} />
                      <Text color="green.500" mt={1}>
                        {data.status.toUpperCase()}
                      </Text>
                    </Box>
                  ) : data.status === "Reduced" ? (
                    <Box d="flex">
                      <Image src={ReducedIcon} mr={1} />
                      <Text color="#00B4BD" mt={1}>
                        {data.status.toUpperCase()}
                      </Text>
                    </Box>
                  ) : (
                    <Box d="flex">
                      <Image src={IncreasedIcon} mr={1} />
                      <Text color="#00B4BD" mt={1}>
                        {data.status.toUpperCase()}
                      </Text>
                    </Box>
                  )}

                  <Popover>
                    <PopoverTrigger>
                      <Button
                        backgroundColor="white"
                        size="sm"
                        transform="rotate(90deg)"
                      >
                        <AiOutlineEllipsis />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      zIndex={4}
                      backgroundColor="teal.500"
                      w="150px"
                    >
                      <PopoverArrow />
                      <PopoverBody color="white">
                        {props.state.edit ? (
                          <Redirect to="/newentry" />
                        ) : (
                          <Button
                            backgroundColor="teal.500"
                            border="none"
                            onClick={() => props.onEdit(data.userId)}
                          >
                            <Icon name="edit" mr={2} />
                            Edit
                          </Button>
                        )}
                        <br></br>
                        <Button
                          icon="delete"
                          backgroundColor="teal.500"
                          border="none"
                          onClick={() => props.onDelete(data.userId)}
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
