import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Userlist = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:4000/users').then((res) => {
      console.log(res);
      setUsers(res.data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  const deleteData = (id) => {
    axios.delete(`http://localhost:4000/moviedel/${id}`).then((res) => {
      alert('Data deleted');
      setUsers(users.filter(user => user._id !== id));
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: 'url(https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTExL2FuZ3VzdGVvd19tdXRlZF9icm93bl92aW50YWdlX2Jvb2tfcGF0dGVybl81ZDA3YjRlNC0yNzBhLTQ4ZTEtODg4NS0yOWMxMTk2OTVlMjRfMS5qcGc.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
      }}
    >
      <Typography variant="h2" gutterBottom align="center" sx={{ fontFamily: 'Lobster', color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.6)',marginBottom: 4 }}>
        User List
      </Typography>
      <TableContainer component={Paper} sx={{ width: '80%', backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: 2, boxShadow: 3 }}>
        <Table sx={{ minWidth: 700 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center"><Typography variant="h6">NAME</Typography></TableCell>
              <TableCell align="center"><Typography variant="h6">EMAIL</Typography></TableCell>
              <TableCell align="center"><Typography variant="h6">ACTION</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user._id}>
                <TableCell component="th" scope="row" align="center">
                  {user.Name}
                </TableCell>
                <TableCell align="center">{user.Email}</TableCell>
                <TableCell align="center">
                  <Button variant="contained" sx={{ backgroundColor: 'red', color: 'white', '&:hover': { backgroundColor: 'darkred' } }} onClick={() => deleteData(user._id)}>Remove</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Userlist;
