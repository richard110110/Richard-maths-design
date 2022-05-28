import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Header from "./Header";
//rgb(114, 18, 240) background color;

const useStyles = makeStyles({
    homeStyle:{
        width:"100%",
        height:"100%",
        backgroundColor: "rgb(114, 18, 240)",  
        position:"fixed",
        left:"0",     
    }
})
function Home(props) {
    const classes = useStyles();

  return (
    <>
      <div className={classes.homeStyle}>
        <Header />
      </div>
    </>
  );
}

export default Home;
