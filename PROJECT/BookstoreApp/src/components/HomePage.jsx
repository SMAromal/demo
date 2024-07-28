import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url(https://images7.alphacoders.com/895/895992.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#fff',
        padding: '20px',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '20px',
          borderRadius: '10px',
          maxWidth: '80%', // Adjusted maxWidth to fit nicely in the center of a laptop screen
          width: '100%',
          margin: 'auto', // Centering the box horizontally
        }}
      >
        <Typography variant="h2" gutterBottom style={{ fontFamily: 'Georgia, serif' }}>
          Welcome to Our Vintage Bookstore
        </Typography>
        <Typography variant="body1" gutterBottom style={{ fontSize: '1.2rem', fontStyle: 'italic' }}>
          Discover a world of stories waiting for you.
        </Typography>
        <Button
          component={Link}
          to="/signup"
          variant="contained"
          sx={{
            backgroundColor: '#9d6346',
            color: '#f0ece6',
            '&:hover': { backgroundColor: '#c78f6b' },
            marginTop: '20px',
            padding: '10px 30px',
            fontSize: '1.1rem',
          }}
        >
          Explore Now
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;