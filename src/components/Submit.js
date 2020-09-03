import React, { useEffect } from "react";
import { Text, Box, Button, Grid } from "@chakra-ui/core";
import { Link } from "react-router-dom";
function Submit(props) {
  useEffect(() => {
    props.state.entry = false;
  }, []);
  return (
    <Grid templateColumns={["1fr", "1fr", "1fr", "1fr 2fr"]}>
      <Box ml="50px" mt="40px" d={["none", "none", "none", "flex"]}>
        <Link to="/dashboard" w="full">
          <Button
            border="1px solid #112147"
            backgroundColor="white"
            w="143px"
            h="40px"
          >
            BACK
          </Button>
        </Link>
      </Box>
      <Box>
        <Text
          fontFamily="Rubik-Light"
          fontSize={["20px", "20px", "30px", "46px"]}
          color="#424345"
          mt={["45%", "45%", "300px", "308px"]}
          ml={["20%", "20%", "30%", "0%"]}
        >
          Entry successfully added !
        </Text>
        <Link to="/newentry">
          <Button
            mt={["17px", "17px", "23px", "40px"]}
            ml={["30%", "30%", "40%", "16%"]}
            backgroundColor="#112147"
            borderRadius="4px"
            fontFamily="Rubik-Medium"
            fontSize={["14px", "14px", "17px", "20px"]}
            letterSpacing="0.2px"
            color="white"
          >
            ADD ANOTHER
          </Button>
        </Link>
      </Box>
      {/*
       */}
    </Grid>
  );
}

export default Submit;
