import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, Checkbox, FormControlLabel, colors, Typography } from '@mui/material';
import { Link,useLocation} from 'react-router-dom';
import axios from 'axios';

const Signup = () => {

  const [form,setForm]=useState({
    Name:'',
    Place:'',
    Age:'',
    Password:'',
    Email:'',
    phoneNumber:''
  })

  function valueCap(e){
    setForm({...form,[e.target.name]:e.target.value})
  }

  function sendData(){
    axios.post("http://localhost:4000/adduser",form).then((res)=>{
      alert('User added sucessfully')
    }).catch((error)=>{
      console.log(error)
    })
  }

  useEffect(()=>{
    if(location.state!=null){
      setForm({...form,
        Name:location.state.val.Name,
        Place:location.state.val.Place,
        Age:location.state.val.Age,
        Password:location.state.val.Password,
        Email:location.state.val.Email,
        phoneNumber:location.state.val.phoneNumber
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
        '& .MuiTextField-root': { m: 1, width: '50ch' },
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 2,
        borderRadius: 2,
        backgroundSize: 'cover',
        boxShadow: 10,
        maxWidth: '600px',  
        margin: 'auto',
        
      }}
      noValidate
      autoComplete="off"
    >
      <h1 style={{ color: 'black' ,fontFamily: 'Lobster' }}>Sign Up</h1>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Name"
          value={form.Name}
          name="Name"
          onChange={valueCap}
        />
      </div>
      <div>
        <TextField
        required
          id="outlined-required"
          label="Place"
          value={form.Place}
          name="Place"
          onChange={valueCap}
        />
      </div>
      <div>
        <TextField
        required
          id="outlined-password-input"
          label="Age"
          value={form.Age}
          name="Age"
          onChange={valueCap}
        />
      </div>
      <div>
        <TextField
        required
          id="outlined-required"
          label="Set up a password!"
          type="password"
          value={form.Password}
          name="Password"
          onChange={valueCap}
        />
      </div>
      <h4 style={{ color: 'black' ,fontFamily: 'Lobster'}}>Contact Details:</h4>
      <div>
        <TextField
        required
          id="outlined-required"
          label="Email-id"
          type="email"
          value={form.Email}
          name="Email"
          onChange={valueCap}
        />
      </div>
      <div>
        <TextField
        required
          id="outlined-required"
          label="Phone Number"
          type="tel"
          value={form.phoneNumber}
          name="phoneNumber"
          onChange={valueCap}
        />
      </div>
      <div>
        <Typography  sx={{ marginTop: 2,color:"black" }}>
          Please read and accept our Terms and Conditions.
        </Typography>
      </div>
      <div style={{ color: 'black' }}>
        <FormControlLabel
          control={<Checkbox name="terms" />}
          label="I agree to the terms and conditions"
        />
      </div>
      <div>
        <Link to={'/login'}><Button sx={{backgroundColor: "sandybrown"}}variant="contained" onClick={sendData}>Sign Up</Button></Link>
      </div>
    </Box>
    </Box>
  );
};

export default Signup;
