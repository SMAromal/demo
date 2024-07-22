import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const Booklist = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get('https://example-data.draftbit.com/books?_limit=20');
        setBooks(res.data);
      } catch (error) {
        console.error('Error fetching books', error);
      }
    };

    fetchBooks();
  }, []);

  const adminUpdate = async (id) => {
    try {
      const updatedBooks = books.map(book => {
        if (book.id === id) {
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
        height: 1600,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 1,
      }}
      >
    <div>
    <TableContainer component={Paper} style={{ width: '100%' , backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
      <Table sx={{ minWidth: 1000 }} aria-label="book table">
        <TableHead>
          <TableRow>
            <TableCell><h2>BOOK TITLE</h2></TableCell>
            <TableCell align="centre"><h2>RENTAL STATUS</h2></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book) => (
            <TableRow key={book.id}>
              <TableCell component="th" scope="row">
                {book.title}
              </TableCell>
              <TableCell align="centre">{book.rented ? 'Rented' : 'Available'}</TableCell>
              <TableCell align="centre">
                <Button sx={{ backgroundColor: "lightgreen" }} variant="contained" onClick={() => adminUpdate(book.id)}>
                  {book.rented ? 'Make Available' : 'Update'}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </Box>
  );
};

export default Booklist;