import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, CircularProgress, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Userlogin = () => {
  const [form, setForm] = useState({
    Email: '',
    Password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('http://localhost:4000/login', form);
      setLoading(false);
      if (response.data.Type === 'Admin') {
        navigate('/userlist');
      } else if (response.data.Type === 'User') {
        navigate('/home');
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      setLoading(false);
      setError('Error logging in');
      console.error(error);
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: 'url(https://images.wallpaperscraft.com/image/single/books_library_shelves_138556_1920x1080.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
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
          maxWidth: '400px',
          width: '100%',
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography variant="h4" gutterBottom align="center" sx={{ fontFamily: 'Lobster', color: '#333' }}>
          Login
        </Typography>
        <TextField
          required
          label="Email"
          variant="outlined"
          name="Email"
          value={form.Email}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          required
          label="Password"
          variant="outlined"
          type="password"
          name="Password"
          value={form.Password}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        {error && <Typography color="error" align="center" sx={{ mb: 2 }}>{error}</Typography>}
        <Button
          type="submit"
          sx={{
            backgroundColor: 'sandybrown',
            color: 'white',
            '&:hover': {
              backgroundColor: 'darkorange',
            },
            width: '100%',
            mb: 2,
          }}
          variant="contained"
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Log In'}
        </Button>
      </Box>
    </Box>
  );
};

export default Userlogin;
