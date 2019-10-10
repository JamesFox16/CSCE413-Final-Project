import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Navbar } from "react-bootstrap";

export default function MainAppBar() {

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">CTA Data</Navbar.Brand>
            </Navbar>
        </div>
    );
}
