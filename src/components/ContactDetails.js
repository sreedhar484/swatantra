import React, { useEffect, useState } from "react";
import { BsArrowLeftShort, BsCameraVideo, BsVolumeMute } from "react-icons/bs";
import {
  AiOutlineMore,
  AiOutlineDelete,
  AiOutlineSearch,
} from "react-icons/ai";
import { AiOutlineSend, AiOutlineAudio } from "react-icons/ai";
import { GrAttachment, GrEmoji } from "react-icons/gr";
import {
  Box,
  Image,
  Text,
  Button,
  Input,
  PseudoBox,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Icon,
} from "@chakra-ui/core";
import { HiOutlinePhone } from "react-icons/hi";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from "@chakra-ui/core";
import io from "socket.io-client";
import LongPress from "./Longpress";
import { useHistory } from "react-router-dom";
import Cookie from "js-cookie";
import "../App.css";
import Dropzone from "react-dropzone";
import Axios from "axios";
function ContactDetails(props) {
  const history = useHistory();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userClick = JSON.parse(Cookie.get("userClick"));
  const [arr, setArr] = useState([]);
  const [msg, setmsg] = useState("");
  const [socket, setSocket] = useState(null);
  const [editMessage, setEditMessage] = useState("");
  const [groupInfo, setGroupInfo] = useState([]);
  const [edit, setEdit] = useState(-1);
  const open = (idx) => {
    setEdit(idx);
  };
  const close = () => setEdit(-1);
  useEffect(() => {
    setSocket(io("https://chatapisree.herokuapp.com"));
  }, []);
  useEffect(() => {
    if (socket !== null) {
      socket.on("Output Chat Message", (messageFromBackEnd) => {
        if (userClick.type === "user") {
          let data = messageFromBackEnd;
          data = data.filter(
            (data) =>
              data.sender === Cookie.get("userName") ||
              data.reciever === Cookie.get("userName")
          );
          data = data.filter(
            (data) =>
              data.sender === userClick.userName ||
              data.reciever === userClick.userName
          );
          setArr(data);
        } else {
          let data = messageFromBackEnd;
          data = data.filter((data) => data.reciever === userClick.userName);
          setArr(data);
        }
      });
    } else {
      Axios.get("https://chatapisree.herokuapp.com/user/chat")
        .then((res) => {
          if (userClick.type === "user") {
            let data = res.data;
            data = data.filter(
              (data) =>
                data.sender === Cookie.get("userName") ||
                data.reciever === Cookie.get("userName")
            );
            data = data.filter(
              (data) =>
                data.sender === userClick.userName ||
                data.reciever === userClick.userName
            );
            setArr(data);
          } else {
            let data = res.data;
            data = data.filter((data) => data.reciever === userClick.userName);
            setArr(data);
          }
        })
        .catch((err) => console.log(err));
      Axios.get("https://chatapisree.herokuapp.com/user")
        .then((res) => {
          let data1 = res.data.filter(
            (data) =>
              data.type === "user" &&
              userClick.users[0].split(",").includes(data.userName)
          );
          setGroupInfo(data1);
        })
        .catch((err) => console.log(err));
    }
  }, [socket]);
  const onDrop = (files) => {
    console.log(files);
    const formData = new FormData();
    formData.append("file", files[0]);
    Axios.post("https://chatapisree.herokuapp.com/user/uploadfiles", formData).then(
      (res) => {
        console.log(res.data);
        socket.emit("Input Chat Message", {
          chatMessage: res.data.url,
          type: "file",
          sender: Cookie.get("userName"),
          reciever: userClick.userName,
        });
      }
    );
  };
  const changeHandle = (event) => {
    setmsg(event.target.value);
  };
  const editMsg = (id) => {
    socket.emit("edit chat message", {
      id: id,
      message: editMessage,
    });
    setEditMessage("");
    setEdit(-1);
  };
  const deleteMsg = (id) => {
    socket.emit("delete chat message", {
      id: id,
    });
    setEdit(-1);
  };
  // const deleteMsgOne = (data1) => {
  //   let data = Cookie.get("userName") === data1.sender?"sender":"reciever"
  //     socket.emit("delete chat one message", {
  //       id: data1._id,
  //       data:data
  //     });
  // };
  const onSend = () => {
    socket.emit("Input Chat Message", {
      chatMessage: msg,
      type: "text",
      sender: Cookie.get("userName"),
      reciever: userClick.userName,
    });
    setmsg("");
  };
  return (
    <Box>
      <div className="header">
        <Box
          d="flex"
          px="10px"
          justifyContent="space-between"
          h={["50px", "50px", "50px", "80px"]}
          w="100%"
          backgroundColor="#112147"
        >
          <Box d="flex" justifyContent="flex-start">
            <Box mt={["10px", "10px", "10px", "20px"]}>
              <BsArrowLeftShort
                color="white"
                size="30px"
                onClick={() => history.push("/main")}
              />
            </Box>
            <Box
              h="50px"
              d="flex"
              p="5px"
              mt={["0px", "0px", "0px", "10px"]}
              onClick={onOpen}
            >
              <Image
                border="1px solid white"
                borderRadius="50%"
                w="40px"
                h="40px"
                src={`https://chatapisree.herokuapp.com/${userClick.userImage}`}
              />
              <Box ml={4}>
                <Text fontWeight="bold" color="white">
                  {userClick.userName}
                </Text>
                <Text color="white">online</Text>
              </Box>
            </Box>
          </Box>
          <Box mt={["5px", "5px", "5px", "10px"]}>
            <Popover placement="left-start" usePortal>
              <PopoverTrigger>
                <Button backgroundColor="#112147">
                  <AiOutlineMore color="white" size="30px" />
                </Button>
              </PopoverTrigger>
              <PopoverContent zIndex={99} w="200px">
                <PopoverArrow />
                <PopoverBody mt="30px">
                  <Box d="flex" flexDirection="column">
                    <Button
                      variant="unstyled"
                      d="flex"
                      justifyContent="flex-start"
                    >
                      <HiOutlinePhone />
                      Call
                    </Button>

                    <Button
                      variant="unstyled"
                      d="flex"
                      justifyContent="flex-start"
                      onClick={()=>history.push("id/video")}
                    >
                      <BsCameraVideo />
                      Video Call
                    </Button>
                    <Button
                      variant="unstyled"
                      d="flex"
                      justifyContent="flex-start"
                    >
                      <AiOutlineSearch />
                      Search
                    </Button>
                    <Button
                      variant="unstyled"
                      d="flex"
                      justifyContent="flex-start"
                    >
                      <AiOutlineDelete />
                      Delete Chat
                    </Button>
                  </Box>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>
        </Box>
      </div>
      <Box
        border="1px solid green.500"
        w="100%"
        h="auto"
        overflowY="scroll"
        mt="10px"
        mb={["50px", "50px", "60px", "70px"]}
      >
        {arr.map((data, idx) => (
          <LongPress
            key={idx}
            time={500}
            onLongPress={
              data.sender === Cookie.get("userName") ? () => open(idx) : ""
            }
          >
            <Box
              d="flex"
              h="auto"
              w="80%"
              minH="40px"
              mx="5px"
              flexDirection="column"
              overflowWrap="break-word"
              backgroundColor="teal.300"
              border="1px solid teal.300"
              borderRadius="10px"
              float={data.sender === Cookie.get("userName") ? "right" : "left"}
              justifyContent={
                data.sender === Cookie.get("userName")
                  ? "flex-end"
                  : "space-between"
              }
              mb="10px"
            >
              <Box>
                {data.type === "text" ? (
                  <Box>
                    <Box d={edit === idx ? "none" : "flex"}>
                      <Text p={1}>{data.message}</Text>
                      <Button
                        variant="unstyled"
                        d={
                          data.sender === Cookie.get("userName")
                            ? ["none", "none", "none", "flex"]
                            : "none"
                        }
                        onClick={() => open(idx)}
                      >
                        <Icon name="chevron-down" />
                      </Button>
                    </Box>
                    <Box d={edit === idx ? "flex" : "none"}>
                      <Input
                        variant="flushed"
                        backgroundColor="white"
                        placeholder="enter msg"
                        isRequired
                        defaultValue={data.message}
                        autoFocus
                        onChange={(e) => setEditMessage(e.target.value)}
                      />
                      <Button
                        variant="unstyled"
                        d="flex"
                        justifyContent="flex-start"
                        onClick={() => editMsg(data._id)}
                      >
                        <Icon name="edit" />
                      </Button>
                      <Button
                        variant="unstyled"
                        d="flex"
                        justifyContent="flex-start"
                        onClick={() => deleteMsg(data._id)}
                      >
                        <Icon name="delete" />
                      </Button>
                      <Button
                        variant="unstyled"
                        d="flex"
                        justifyContent="flex-start"
                        onClick={close}
                      >
                        cancel
                      </Button>
                    </Box>
                  </Box>
                ) : (
                  <Box>
                    <Box>
                      <Text>
                        {data.message.split(".").pop() === "jpg" ||
                        data.message.split(".").pop() === "jpeg" ||
                        data.message.split(".").pop() === "png" ? (
                          <Image
                            width="100%"
                            alt="img"
                            src={`https://chatapisree.herokuapp.com/${data.message}`}
                          />
                        ) : data.message.split(".").pop() === "mp4" ||
                          data.message.split(".").pop() === "mkv" ||
                          data.message.split(".").pop() === "web" ? (
                          <video
                            style={{ width: "100%", height: "200px" }}
                            src={`https://chatapisree.herokuapp.com/${data.message}`}
                            alt="video"
                            type="video/mp4"
                            controls
                          />
                        ) : data.message.split(".").pop() === "mp3" ||
                          data.message.split(".").pop() === "mpeg" ||
                          data.message.split(".").pop() === "ogg" ? (
                          <video
                            style={{ width: "100%" }}
                            src={`https://chatapisree.herokuapp.com/${data.message}`}
                            type="audio/mpeg"
                            controls
                          />
                        ) : (
                          <a href={`https://chatapisree.herokuapp.com/${data.message}`}>
                            <Icon name="download" />{" "}
                            {data.message.split("_").pop()}
                          </a>
                        )}
                      </Text>
                    </Box>
                    <Box d={edit === idx ? "flex" : "none"}>
                      <Button
                        variant="unstyled"
                        d="flex"
                        justifyContent="flex-start"
                        onClick={() => deleteMsg(data._id)}
                      >
                        <Icon name="delete" />
                      </Button>
                      <Button
                        variant="unstyled"
                        d="flex"
                        justifyContent="flex-start"
                        onClick={close}
                      >
                        cancel
                      </Button>
                    </Box>
                  </Box>
                )}
                <Text
                  mr={2}
                  p={1}
                  fontSize="12px"
                  d={
                    data.sender !== Cookie.get("userName") &&
                    userClick.type !== "user"
                      ? "flex"
                      : "none"
                  }
                >
                  {data.sender}
                </Text>
              </Box>
            </Box>
          </LongPress>
        ))}
      </Box>
      <div className="footer">
        <Box
          h={["40px", "40px", "50px", "60px"]}
          px="10px"
          backgroundColor="#E2E8F0"
          color="black"
          d="flex"
        >
          <Box py="5px">
            <GrEmoji size="30px" />
          </Box>
          <Input
            name="chatMessage"
            ml="3px"
            variant="unstyled"
            backgroundColor="#E2E8F0"
            color="black"
            placeholder="Type here"
            value={msg}
            onChange={changeHandle}
          />
          <Box>
            {msg ? (
              <PseudoBox py="5px" d="flex" as={Button} onClick={onSend}>
                <AiOutlineSend size="25px" />
              </PseudoBox>
            ) : (
              <Box d="flex">
                <Dropzone onDrop={onDrop}>
                  {({ getRootProps, getInputProps }) => (
                    <section>
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <Button
                          variant="unstyled"
                          _active="none"
                          _checked="none"
                        >
                          <GrAttachment
                            size="25px"
                            _active="none"
                            _checked="none"
                          />
                        </Button>
                      </div>
                    </section>
                  )}
                </Dropzone>

                <AiOutlineAudio size="25px" />
              </Box>
            )}
          </Box>
        </Box>
      </div>
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        size={["xs", "sm", "lg", "xl"]}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color="white" />
          <DrawerHeader
            backgroundColor="#112147"
            d="flex"
            flexDirection="column"
          >
            <Image
              borderRadius="50%"
              w="100px"
              h="100px"
              justifySelf="center"
              alignSelf="center"
              src={`https://chatapisree.herokuapp.com/${userClick.userImage}`}
              mb={2}
            />
            <Text color="white" justifySelf="center" alignSelf="center">
              {userClick.userName}
            </Text>
          </DrawerHeader>
          <DrawerBody>
            <Box h="auto">
              {groupInfo.map((data, idx) => (
                <Box
                  key={idx}
                  h="60px"
                  d="flex"
                  mt="10px"
                  p="5px"
                  backgroundColor={data.type === "group" && "teal.300"}
                  boxShadow=" 0 0 7px 2px rgba(0,0,0,0.12)"
                >
                  <Image
                    border="1px solid black"
                    borderRadius="50%"
                    w="50px"
                    h="50px"
                    src={`https://chatapisree.herokuapp.com/${data.userImage}`}
                  />
                  <Box ml={4}>
                    <Text fontWeight="bold">{data.userName}</Text>
                    <Text>admin</Text>
                  </Box>
                </Box>
              ))}
            </Box>
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
export default ContactDetails;
