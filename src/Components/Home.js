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

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
    

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
  const [posts, setPosts] = useState([]);

  const [post, setPost] = useState("");
  const [pseudonym, setPseudonym] = useState("");

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [reply, setReply] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleReplyOpen = (e) => {
    console.log(e);
    setReply(true);
  };
  // function handleReplyOpen(id) {
  //     setReply(true);
  // }

  const handleReplyClose = () => {
    setReply(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      post: post,
      pseudonym: pseudonym,
      voteNo: 0,
    };

    const newPosts = [...posts, newPost];
    setPosts(newPosts);
    setPost("");
    setPseudonym("");
    handleClose();
    // alert("Submit");
  };

  const handlePost = (e) => {
    setPost(e.target.value);
  };

  const handlePseudonym = (e) => {
    setPseudonym(e.target.value);
  };

  const voteUp = (index) => {
    const newPosts = [...posts];

    newPosts[index].voteNo++;

    setPosts(newPosts);
   // calculateTotal();
};

const voteDown = (index) => {
    const newPosts = [...posts];

    newPosts[index].voteNo--;

    setPosts(newPosts);
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
              <TextField
                autoFocus
                margin="dense"
                id="post"
                label="post"
                type="text"
                value={post}
                fullWidth
                variant="standard"
                onChange={handlePost}
                required
              />

              <TextField
                autoFocus
                margin="dense"
                id="pseudonym"
                label="pseudonym"
                type="text"
                fullWidth
                value={pseudonym}
                variant="standard"
                onChange={handlePseudonym}
                required
              />
            </DialogContent>
            <DialogActions>
              <Button type="submit">Post</Button>
            </DialogActions>
          </form>
        </Dialog>

        <Typography component={"div"} backgroundColor="white">
          {posts.map((item, index) => (
            <div key={index}>
              <p>
                {item.post} {item.pseudonym} {item.voteNo}
              </p>
              <KeyboardArrowUpIcon cursor="pointer" onClick={() => voteUp(index)}/>
              <KeyboardArrowDownIcon cursor="pointer" onClick={() => voteDown(index)} />
              <button className={classes.buttonStyle} onClick={handleReplyOpen}>
                Reply
              </button>
             
              <Dialog open={reply} onClose={handleReplyClose}>
                
                
                  <DialogContent>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="post"
                      label="post"
                      type="text"
                      fullWidth
                      variant="standard"
                    />

                    <TextField
                      autoFocus
                      margin="dense"
                      id={index}
                      label="pseudonym"
                      type="text"
                      text={item.pseudonym}
                      value={item.pseudonym}
                      fullWidth
                      variant="standard"
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleReplyClose}>Post</Button>
                  </DialogActions>
              </Dialog>
            </div>
          ))}
        </Typography>
      </div>
    </>
  );
}

export default Home;
