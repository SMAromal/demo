import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Userlogin = ( ) =>{
  const[form,setForm]=useState({
    name:" ",
    email:" ",
    password:" "

  })
  function valueAdd(){
    console.log(form)
  }
  function valueCap(e){
    setForm({...form,[e.target.name]:e.target.value})

  }

  


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
        '& .MuiTextField-root': { m: 1, width: '40ch' },
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 4,
        borderRadius: 2,
        backgroundSize: 'cover',
        boxShadow: 10,
        maxWidth: '400px',  
        margin: 'auto',
      }}
      noValidate
      autoComplete="off"
      
      
    >
      <h1 style={{color:'black',fontFamily: 'Lobster'}}> Login</h1>
      <div>
        <br />
        <TextField 
        required
        id="outlined-basic" 
        label="Name" 
        variant="outlined" 
        />
        
        <br />
        <TextField 
        required
        id="outlined-basic" 
        label="Email-id" 
        variant="outlined" 
        />
        <br />
        <div>
        <TextField
        required
          id="outlined-basic"
          
          label="Password"
          variant='outlined'
          type="password"
        />
      </div>
          
          
          <br />

    </div>
    <div>
        <br />
        <Link to={'/home'}><Button sx={{backgroundColor: "sandybrown"}} variant='contained' onClick={valueAdd}>LogIn</Button></Link>
        <Link to={'/userlist'}><h4>Admin Page</h4></Link>
    </div>
    </Box>
    </Box>
  )

}
export default Userlogin