import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, Checkbox, FormControlLabel, colors, Typography } from '@mui/material';
import axios from 'axios';


const Addbook = () => {

  const [form,setForm]=useState({
    ISBN:'',
    Title:'',
    Author:'',
    Genre:'',
    Publication:'',
    Image:''
  })

  function valueCap(e){
    setForm({...form,[e.target.name]:e.target.value})
  }

  function sendBData(){
    axios.post("http://localhost:4000/addbook",form).then((res)=>{
      alert(' Book added sucessfully ')
    }).catch((error)=>{
      console.log(error)
    })
  }

  useEffect(()=>{
    if(location.state!=null){
      setForm({...form,
        ISBN:location.state.val.ISBN,
        Title:location.state.val.Title,
        Author:location.state.val.Author,
        Genre:location.state.val.Genre,
        Publication:location.state.val.Publication,
        Image:location.state.val.Image
      })
    }
  })


  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: 'url(https://images.wallpaperscraft.com/image/single/books_library_shelves_138556_1920x1080.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
      }}
    >
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100ch' },
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 2,
        borderRadius: 2,
        backgroundSize: 'cover',
        boxShadow: 10,
        maxWidth: '1000px',  
        margin: 'auto',
        
      }}
      noValidate
      autoComplete="off"
    >
      <h1 style={{ color: 'black' ,fontFamily: 'Lobster', alignItems: 'left' }}>Add a Book</h1>
      <div>
        <TextField
          required
          id="outlined-required"
          label="ISBN Number"
          value={form.ISBN}
          name="ISBN"
          onChange={valueCap}
         
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Title"
          value={form.Title}
          name="Title"
          onChange={valueCap}
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-password-input"
          label="Author"
          value={form.Author}
          name="Author"
          onChange={valueCap}
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Genre"
          value={form.Genre}
          name="Genre"
          onChange={valueCap}
          
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-read-only-input"
          label="Publication Year"
          value={form.Publication}
          name="Publication"
          onChange={valueCap}
         
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-read-only-input"
          label="Image URL"
          value={form.Image}
          name="Image"
          onChange={valueCap}
          
          
        />
      </div>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button sx={{ backgroundColor: "sandybrown" }} variant="contained" onClick={sendBData}>Add Book</Button>
        </Box>
    </Box>
    </Box>
  );
};

export default Addbook;
