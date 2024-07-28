import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography } from '@mui/material';

const Booklist = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/books')
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const adminUpdate = async (id) => {
    try {
      const updatedBooks = books.map(book => {
        if (book._id === id) {
          return { ...book, rented: !book.rented };
        }
        return book;
      });

      setBooks(updatedBooks);
    } catch (error) {
      console.error('error', error);
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: 'url(https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTExL2FuZ3VzdGVvd19tdXRlZF9icm93bl92aW50YWdlX2Jvb2tfcGF0dGVybl81ZDA3YjRlNC0yNzBhLTQ4ZTEtODg4NS0yOWMxMTk2OTVlMjRfMS5qcGc.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '210vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
      }}
    >
      <Typography variant="h3" sx={{ marginBottom: 5, color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.6)', fontFamily: 'Lobster' }}>
        Catalogue
      </Typography>
      <TableContainer component={Paper} sx={{ width: '82%', backgroundColor: 'rgba(255, 255, 255, 0.9)', boxShadow: 3 }}>
        <Table sx={{ minWidth: 1000 }} aria-label="book table">
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
              <TableCell align="center"><h2 style={{ fontFamily: 'Arial', fontSize: '1.2rem' }}>BOOK TITLE</h2></TableCell>
              <TableCell align="center"><h2 style={{ fontFamily: 'Arial', fontSize: '1.2rem' }}>AUTHOR</h2></TableCell>
              <TableCell align="center"><h2 style={{ fontFamily: 'Arial', fontSize: '1.2rem' }}>RENTAL STATUS</h2></TableCell>
              <TableCell align="center"><h2 style={{ fontFamily: 'Arial', fontSize: '1.2rem' }}>ACTION</h2></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book) => (
              <TableRow key={book._id} sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}>
                <TableCell component="th" scope="row" sx={{ padding: '10px', fontFamily: 'Arial', fontSize: '1rem' }}>
                  {book.Title}
                </TableCell>
                <TableCell align="center" sx={{ padding: '10px', fontFamily: 'Arial', fontSize: '1rem' }}>{book.Author}</TableCell>
                <TableCell align="center" sx={{ padding: '10px', fontFamily: 'Arial', fontSize: '1rem' }}>{book.rented ? 'Rented' : 'Available'}</TableCell>
                <TableCell align="center" sx={{ padding: '10px' }}>
                  <Button
                    sx={{
                      backgroundColor: book.rented ? 'lightcoral' : 'lightgreen',
                      '&:hover': {
                        backgroundColor: book.rented ? 'red' : 'green',
                      },
                      fontFamily: 'Arial',
                      fontSize: '0.9rem',
                    }}
                    variant="contained"
                    onClick={() => adminUpdate(book._id)}
                  >
                    {book.rented ? 'Make Available' : 'Rent'}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Booklist;
