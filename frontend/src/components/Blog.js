import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate } from 'react-router-dom'
import axios from 'axios';

export const Blog = ({title,description,imageURL,userName , isUser,id}) => {
  const navigate = useNavigate();
  const handleEdit = (e) =>{
    navigate(`/myblogs/${id}`)
  };
  const deleteRequest = async()=>{
    const res =  await axios.delete(`https://blog-by-react-api.vercel.app/api/blog/${id}`).catch(err => console.log(err));
    const data = await res.data;
    return data;
  }
  const handleDelete =() =>{
    deleteRequest().then(()=>navigate("/")).then(()=>navigate("/blogs"));


  }

  console.log(title,isUser)
  return (
    <div><Card sx={{ width: "40%" 
     ,margin:"auto",
     mt:2,
     padding:2,
     boxShadow:"5px 5px 10px #ccc",
     ":hover:": {
      boxShadow: "10px 10px 20px #ccc "
    },
    }}>
      {isUser && (
        <Box display={'flex'}>
          <IconButton onClick={handleEdit} sx={{marginLeft:'auto'}}><EditIcon color='warning'/></IconButton>
          <IconButton onClick={handleDelete}><DeleteIcon color='error' /></IconButton>
        </Box>
      )}
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
          {userName ? userName.charAt(0) : ""}
        </Avatar>
      }
      
      
      title={title}
      subheader="September 14, 2016"
    />
    <CardMedia
      component="img"
      height="194"
      image={imageURL}
      alt="Paella dish"
    />
    
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        <b>{userName}</b>{": "}{description}
      </Typography>
    </CardContent>
   
  </Card></div>
  );
}


export default Blog;
