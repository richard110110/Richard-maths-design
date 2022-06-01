import React, { useState} from "react";
import { makeStyles } from "@mui/styles";
import Header from "./Header";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";


import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

//rgb(114, 18, 240) background color;

const useStyles = makeStyles({
  homeStyle: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(114, 18, 240)",
    position: "relative",
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
    boxShadow: "5px 5px 15px 5px #000000",
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

  dialogStyle: {
    width: "100%",
    height: "800px",
  },

  postInputStyle: {
    color: "blue",
    borderStyle: "solid",
    borderColor: "rgb(114, 18, 240)",
  },
  notchedOutline: {
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "rgb(114, 18, 240) !important",
    height: "auto",
    // marginBottom: "400px",
  },

  formStyle: {
    display: "flex",
    flexDirection: "column",
    width: "600px",
    height: "400px",
    // borderStyle: "solid",
  },
  textareaStyle: {
    paddingLeft: "30px",
    paddingTop: "30px",
    fontStyle: "normal",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "20px",
    borderRadius: "30px",
    borderColor: "rgb(114, 18, 240)",
    borderStyle: "solid",
    borderWidth: "3px",
    boxShadow: "3px 4px 10px -2px #000000",
  },

  inputStyle: {
    marginTop: "30px",
    height: "50px",
    paddingLeft: "30px",
    fontStyle: "normal",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "20px",
    borderRadius: "25px",
    borderColor: "rgb(114, 18, 240)",
    borderStyle: "solid",
    borderWidth: "3px",
    boxShadow: "3px 4px 10px -2px #000000",
  },
  postButton: {
    marginTop: "40px",
    width: "40%",
    height: "60px",
    backgroundColor: "rgb(114, 18, 240)",
    borderColor: "rgb(114, 18, 240)",
    color: "white",
    fontSize: "23px",
    fontWeight: "bold",
    cursor: "pointer",
    borderRadius: "30px",
    borderStyle: "solid",
    borderWidth: "3px",
  },
});
function Home(props) {
  const [posts, setPosts] = useState([]);
  const [selectPost, setSelectPost] = useState({});

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

  // function handleReplyOpen(id) {
  //     setReply(true);
  // }

  const handleReplyClose = () => {
    setReply(false);
  };

  const showInfo = (id) => {
    console.log(id);
    setSelectPost(posts.find((it) => it.id === id));
    setReply(true);
  };

  const customStyles = {
    width: "100%",
    height: "500px",
    justifyContent: "center",
    textalign: "center",
    alignItems: "center",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      post: post,
      pseudonym: pseudonym,
      voteNo: 0,
      id: new Date().getUTCMilliseconds(),
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
  const handleReplyOpen = () => {
    //  console.log(e);
    //console.log(index);

    setReply(true);
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

  const styles = (theme) => ({});

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

        <Dialog
          open={open}
          onClose={handleClose}
          //   style={customStyles}
          sx={{
            "& .MuiDialog-container": {
              "& .MuiPaper-root": {
                // width: "150%",
                minWidth: "60%",
                marginTop: "200px",
                height: "500px",
                justifyContent: "center",
                textalign: "center",
                alignItems: "center",
              },
            },
          }}
        >
          <form onSubmit={handleSubmit}>
            <DialogContent>
              {/* <TextField
                autoFocus
                margin="dense"
                id="post"
                label="Write your post ..."
                type="text"
                value={post}
                fullWidth
                onChange={handlePost}
                variant="outlined"
              rows="10"
                InputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              /> */}
              <div width="100%" className={classes.formStyle}>
                <textarea
                  className={classes.textareaStyle}
                  rows="6"
                  columns="10"
                  id="post"
                  type="text"
                  placeholder="Write your post ..."
                  required
                  onChange={handlePost}
                />
                <input
                  className={classes.inputStyle}
                  id="pseudonym"
                  type="text"
                  placeholder="Enter your pseudonym"
                  required
                  onChange={handlePseudonym}
                />
                <button type="submit" className={classes.postButton}>
                  Post
                </button>
              </div>
              {/* <TextField
                autoFocus
                margin="dense"
                id="pseudonym"
                label="Enter your pseudonym"
                type="text"
                fullWidth
                value={pseudonym}
                variant="outlined"
                onChange={handlePseudonym}
                InputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              /> */}
            </DialogContent>
          </form>
        </Dialog>

        <div className="container">
          {posts.map((item, index) => (
            <div key={index} className="postItem">
              <div className="voteContainer">
                <KeyboardArrowUpIcon
                  className="voteIcon"
                  cursor="pointer"
                  fontSize="2.5rem"
                  onClick={() => voteUp(index)}
                />
                <p className="voteNo"> {item.voteNo}</p>
                <KeyboardArrowDownIcon
                  className="voteIcon"
                  cursor="pointer"
                  fontSize="2.5rem"
                  onClick={() => voteDown(index)}
                />
              </div>
              <div className="itemDetail">
                <p className="postDetail">{item.post}</p>
                <p className="postPseudoym">{item.pseudonym}</p>
                <button
                  className="replyButton"
                  onClick={() => showInfo(item.id)}
                >
                  Reply
                </button>
              </div>

              <Dialog
                open={reply}
                onClose={handleReplyClose}
                sx={{
                  "& .MuiDialog-container": {
                    "& .MuiPaper-root": {
                      // width: "150%",
                      minWidth: "60%",
                      marginTop: "200px",
                      height: "500px",
                      justifyContent: "center",
                      textalign: "center",
                      alignItems: "center",
                    },
                  },
                }}
              >
                <DialogContent>
                  <div width="100%" className={classes.formStyle}>
                    <textarea
                      className={classes.textareaStyle}
                      rows="6"
                      columns="10"
                      id="post"
                      type="text"
                      placeholder="Write your post ..."
                    />
                    <input
                      className={classes.inputStyle}
                      id="pseudonym"
                      type="text"
                      text={selectPost.pseudonym}
                      value={selectPost.pseudonym}
                    />
                    <button
                      type="submit"
                      onClick={handleReplyClose}
                      className={classes.postButton}
                    >
                      Post
                    </button>
                  </div>
                  {/* <TextField
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
                    id="pseudonym"
                    label="pseudonym"
                    type="text"
                    text={selectPost.pseudonym}
                    value={selectPost.pseudonym}
                    fullWidth
                    variant="standard"
                  /> */}
                </DialogContent>
                {/* <DialogActions>
                  <Button onClick={handleReplyClose}>Post</Button>
                </DialogActions> */}
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
