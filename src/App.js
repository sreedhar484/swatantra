import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import Login from "./components/Login";
import Submit from "./components/Submit";
import DbForm from "./components/DbForm";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Header />
      <Dashboard />
      {/* <Main />  */}
      {/* <Login /> */}
      {/* <Submit /> */}
      {/* <DbForm /> */}
    </ThemeProvider>
  );
}
export default App;
