import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    headerStyle:{
        width:"100%",
        backgroundColor: "white",
        height:"70px",
        position: "static",
    }
})

function Header(props) {
    const classes = useStyles();

    return (
        <div className={classes.headerStyle}>
            
        </div>
    );
}

export default Header;