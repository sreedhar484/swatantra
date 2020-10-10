import { Box, Stack, Text } from "@chakra-ui/core";
import Header from "../components/Header";
import Content from "./Content";
import Search from "./Search";
import Login from "./Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ContactDetails from "./ContactDetails";
import Register from "./Register";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewGroup from "./NewGroup";
import VideoCall from "./VideoCall";
import Cookie from "js-cookie";
import React, { Component } from 'react'

export class Main extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       log:true,
    }
  }
  componentDidMount(){
    if (Cookie.get("userName") !== undefined) {
      this.logStatus()
    }
  }
  logStatus=()=>{
    this.setState({ log: true });
  }
  render() {
    return (
      <Box>
      <Stack spacing={8}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Login logStatus={this.logStatus} />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            
            <Route exact path="/main">
              {this.state.log?<div><Header />
              <Content /></div>:<Redirect to="/"/>}
              
            </Route>
            <Route exact path="/search">
              {this.state.log?<div><Search /></div>:<Redirect to="/"/>}
              
            </Route>
            <Route exact path="/main/id">
              {this.state.log?<div><ContactDetails /></div>:<Redirect to="/"/>}
              
            </Route>
            <Route exact path="/main/id/video">
              {this.state.log?<div><VideoCall/></div>:<Redirect to="/"/>}
              
            </Route>
            <Route exact path="/newgroup">
              {this.state.log?<div><NewGroup/></div>:<Redirect to="/"/>}
              
            </Route>
            <Route
              path="*"
              component={() => (
                <Text
                  textAlign="center"
                  color="red.500"
                  fontSize={["30px", "30px", "35px", "40px"]}
                >
                  404 Page Not Found
                </Text>
              )}
            ></Route>
          </Switch>
        </Router>
      </Stack>
    </Box>
    )
  }
}

export default Main
