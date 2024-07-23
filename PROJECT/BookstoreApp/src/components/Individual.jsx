import { Box, TextField } from '@mui/material'
import React from 'react'

const Individual = () => {
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
        padding: 6,
      }}
      >
    <Box
      component="form"
      sx={{
        
        '& .MuiTextField-root': { m: 1, width: '50ch' },
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 10,
        borderRadius: 2,
        backgroundSize: 'cover',
        boxShadow: 10,
        maxWidth: '1000px',  
        margin: 'auto'
      }}
      noValidate
      autoComplete="off"
    >
        <h1 style={{ color: 'black' ,fontFamily: 'Lobster', alignItems: 'left' }}>Book Details</h1>

        <div>
        <TextField
          label="ISBN number"
          variant="standard"
        />
        
        </div>

        <div>
        <TextField
          label="Title"
          variant="standard"
        />
        
        </div>
        <div>
        <TextField
          label="Author"
          variant="standard"
        />
        
        </div>
        <div>
        <TextField
          label="Publication Year"
          variant="standard"
        />
        
        </div>
        <div>
        <TextField
          label="Genre"
          variant="standard"
        />
        
        </div>
        
        </Box>
        </Box>
  )
}

export default Individual