import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get('http://localhost:4000/books'); 
        setBooks(res.data);
      } catch (error) {
        console.error('Error try again', error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: 'url(https://i.pinimg.com/736x/36/a0/85/36a085785eabcc6add04d35e8c97be37.jpg)',
        backgroundPosition: 'center',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
      }}
    >
      <div>
      <Typography variant="h2" gutterBottom align="center" sx={{ fontFamily: 'Lobster', color: 'black', marginBottom: 4 }}>
        Book List
      </Typography>
        <div className="card-list">
          {books.map(book => (
            <div key={book._id} className="card">
              <Link to={`/book/${book._id}`} className="card-link">
                <img src={book.Image} alt={book.Title} className="card-img" />
                <div className="card-body">
                  <Link to={'/indi'}><h3 className="card-title">{book.Title}</h3></Link>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default Home;
