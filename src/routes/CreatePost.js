import React, {useState} from "react";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


function CreatePost() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [topic, setTopic] = useState('');
  const navigate = useNavigate();
 
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  }

  const handleCreatePost = () => {
    // Create a new post object
    const newPost = {
      title: title,
      description: description,
      topics: [topic],
      clinician: {
        name: "Jeffry Hartanto",
        role: "Research Fellow at National Dental Centre Singapore",
        id: 100,
      },
      participants: [],
      discussion: [],
      likes: 0,
    };
  
    console.log("New Post Data BEFORE creatingPost:", newPost); // Log the new post data
    //navigate back to home page with these details
    navigate('/', { state: { newPostData: newPost } });
  };
  return (
    <div className="content">
      <h1>Create New Post</h1>
      <Stack
      component="form"
      sx={{
        width: "50%",
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Title"
        variant="outlined"
        value={title}
        onChange={handleTitleChange}
      />
      <TextField
        id="outlined-basic"
        label="Description"
        variant="outlined"
        rows={4}
        multiline={true}
        value={description}
        onChange={handleDescriptionChange}
      />
      <TextField
        id="outlined-basic"
        label="Topic"
        variant="outlined"
        value={topic}
        onChange={handleTopicChange}
      />
      </Stack>
      
      <Button
        type="submit"
        variant="contained"
        style={{ width:"10%" }}
        onClick={handleCreatePost}
      >
        Post
      </Button>
    </div>
  );
}

export default CreatePost;
