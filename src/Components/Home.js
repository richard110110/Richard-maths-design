import React, { useState, useRef, useEffect } from "react";
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Header from "./Header";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

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
    cursor: "pointer",
    border: "3px solid",
    textTransform: "capitalize",
  },
});
function Home(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const post = useRef(null);
  const pseudonym = useRef(null);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(post.current.value + " " + pseudonym.current.value);
  };

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
            <button className={classes.buttonStyle} onClick={handleClickOpen}>
              new post
            </button>
          </Grid>
        </Grid>

        <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>

          <DialogContent>
              {/* <input type="text" required placeholder="post" ref={post} />
              <input type="text" required placeholder="pseudonym" ref={pseudonym} /> */}
              <TextField
                autoFocus
                margin="dense"
                id="post"
                label="post"
                type="text"
                fullWidth
                variant="standard"
                ref={post}
                required
              />

              <TextField
                autoFocus
                margin="dense"
                id="pseudonym"
                label="pseudonym"
                type="text"
                fullWidth
                variant="standard"
                ref={pseudonym}
                required
              />

          </DialogContent>
          <DialogActions>
            <Button type="submit">Post</Button>
          </DialogActions>
          </form>

        </Dialog>
      </div>
    </>
  );
}

export default Home;
