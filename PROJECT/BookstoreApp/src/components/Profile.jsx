import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Profile = () => {
  const [form, setForm] = useState({
    name: '',
    place: '',
    age: '',
    password: '',
    email: '',
    phoneno: ''
  });
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
        backgroundImage:
          'url(https://t4.ftcdn.net/jpg/08/81/23/33/360_F_881233374_OwUvYpdfF3Xr0I88gstvRHefOmFeFcOa.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
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
          padding: 2,
          borderRadius: 3,
          boxShadow: 10,
          maxWidth: '400px',
          textAlign: 'center', 
        }}
        noValidate
        autoComplete="off"
    >
      <h1 style={{ color: 'black' ,fontFamily: 'Lobster', alignItems: 'left' }}>Profile Details</h1>
      <div style={{ width: '100%', maxWidth: '400px', marginBottom: '20px' }}>
        <TextField
          id="outlined-basic"
          label="Name"
          name="name"
          value={form.name}
          onChange={valueCap}
          fullWidth
          variant="outlined"
          margin="normal"
        />
        <br />

        <TextField
          id="outlined-basic"
          label="Place"
          name="place"
          value={form.place}
          onChange={valueCap}
          fullWidth
          variant="outlined"
          margin="normal"
        />

        <TextField
          id="outlined-basic"
          label="Age"
          name="age"
          value={form.age}
          onChange={valueCap}
          fullWidth
          variant="outlined"
          margin="normal"
        />

        <TextField
          id="outlined-basic"
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={valueCap}
          fullWidth
          variant="outlined"
          margin="normal"
        />

        <TextField
          id="outlined-basic"
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={valueCap}
          fullWidth
          variant="outlined"
          margin="normal"
        />

        <TextField
          id="outlined-basic"
          label="Phone Number"
          name="phoneno"
          value={form.phoneno}
          onChange={valueCap}
          fullWidth
          variant="outlined"
          margin="normal"
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ fontSize: '20px',color:"Black", fontWeight: 'bold' }}>Books Rented:</label>
        <span style={{ marginLeft: '10px', border: '1px solid black', padding: '5px' }}>0</span>
      </div>

      <Button variant="contained" onClick={valueAdd} style={{ backgroundColor: 'sandybrown', color: 'white' }}>
        Edit Profile
      </Button>
 </Box>
 </Box>
  );
};

export default Profile;