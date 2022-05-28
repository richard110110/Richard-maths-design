import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Header from "./Header";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

//rgb(114, 18, 240) background color;

const useStyles = makeStyles({
  homeStyle: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(114, 18, 240)",
    position: "fixed",
    left: "0",
  },
  title: {
    borderRadius: "20px",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "rgb(22,30,62)",
    color: "white",
    fontWeight: "bold",
    fontSize: "25px",
  },
  titleText: {
    marginTop: "0px",
    paddingBottom: "30px",
  },
  buttonStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: "25px",
    textDecoration: "none",
    backgroundColor: "rgb(22,30,62)",
    height: "70%",
    width: "80%",
    marginTop: "-20px",
    borderColor: "rgb(114, 18, 240)",
    borderRadius: "30px",
  },
});
function Home(props) {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <div className={classes.homeStyle}>
        <Header />
        <Grid container spacing={7} className={classes.title}>
          <Grid
            item
            xs={8}
            md={8}
            backgroundColor={"rgb(22,30,62)"}
            paddingBottom={"auto"}
            paddingTop={"auto"}
            borderRadius={20}
          >
            <p className={classes.titleText}>Maths For ’em</p>
          </Grid>
          <Grid
            item
            xs={4}
            md={4}
            backgroundColor={"rgb(22,30,62)"}
            borderRadius={20}
          >
            <button className={classes.buttonStyle}>New Post</button>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Home;
