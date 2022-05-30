import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, Typography } from "@mui/material";


function Post(props) {
  const [post, setPost] = useState("");
  const [pseudonym, setPseudonym] = useState("");

  const handleSubmit = e => {
      e.preventDefault();
      setPost("");
      setPseudonym("");
      alert("Submit");
  }

  const handlePost = e => {
      setPost(e.target.value);
  }

  const handlePseudonym = e => {
      setPseudonym(e.target.value);
  }

  return (
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
  );
}

export default Post;
