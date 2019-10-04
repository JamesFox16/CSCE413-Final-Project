import React from "react";
import logo from "./logo.svg";
import Button from "@material-ui/core/Button";
import "./App.css";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import MainAppBar from "./component/MainAppBar";

function App() {
  return (
    <div className="App">
      <MainAppBar/>
    </div>
  );
}

export default App;
