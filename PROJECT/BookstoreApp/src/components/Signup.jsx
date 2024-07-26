import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, Checkbox, FormControlLabel, Typography, CircularProgress } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [form, setForm] = useState({
    Name: '',
    Place: '',
    Age: '',
    Password: '',
    Email: '',
    phoneNumber: '',
    Type: 'User'
  });
  const [loading, setLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState('');
  const location = useLocation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setTermsAccepted(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      setError('You must agree to the terms and conditions');
      return;
    }
    setLoading(true);
    setError('');
    try {
      await axios.post('http://localhost:4000/adduser', form);
      alert('User added successfully');
    } catch (error) {
      setError('Error adding user');
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (location.state) {
      setForm({
        ...form,
        ...location.state.val
      });
    }
  }, [location.state]);

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: 'url(https://images.wallpaperscraft.com/image/single/books_library_shelves_138556_1920x1080.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '150vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
      }}
    >
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '100%' },
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: 4,
          borderRadius: 3,
          boxShadow: 3,
          maxWidth: '500px',
          width: '100%',
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography variant="h4" gutterBottom align="center" sx={{ fontFamily: 'Lobster', color: '#333' }}>
          Sign Up
        </Typography>
        <TextField
          required
          label="Name"
          value={form.Name}
          name="Name"
          onChange={handleChange}
        />
        <TextField
          required
          label="Place"
          value={form.Place}
          name="Place"
          onChange={handleChange}
        />
        <TextField
          required
          label="Age"
          value={form.Age}
          name="Age"
          onChange={handleChange}
          type="number"
        />
        <TextField
          required
          label="Set up a password!"
          type="password"
          value={form.Password}
          name="Password"
          onChange={handleChange}
        />
        <Typography variant="h6" sx={{ mt: 2, color: '#333' }}>
          Contact Details:
        </Typography>
        <TextField
          required
          label="Email-id"
          type="email"
          value={form.Email}
          name="Email"
          onChange={handleChange}
        />
        <TextField
          required
          label="Phone Number"
          type="tel"
          value={form.phoneNumber}
          name="phoneNumber"
          onChange={handleChange}
        />
        <Typography sx={{ mt: 2, mb: 1, color: '#333' }}>
          Please read and accept our Terms and Conditions.
        </Typography>
        <FormControlLabel
          sx={{color:'black'}}
          control={<Checkbox checked={termsAccepted} onChange={handleCheckboxChange} />}
          label="I agree to the terms and conditions"
        />
        {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
        <Button
          type="submit"
          sx={{
            backgroundColor: 'sandybrown',
            color: 'white',
            '&:hover': {
              backgroundColor: 'darkorange',
            },
            width: '100%',
            mt: 3,
            py: 1.5,
          }}
          variant="contained"
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Sign Up'}
        </Button>
        <Typography sx={{ mt: 2, textAlign: 'center',color:'black' }}>
          Already have an account? <Link to="/login">Login</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Signup;
