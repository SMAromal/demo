import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box,Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import {useNavigate} from 'react-router-dom'

const Userlist = () => {

  const[users,setUsers]=useState([])
    var navigate=useNavigate()
        useEffect(()=>{
          axios.get('http://localhost:4000/users').then((res)=>{
              console.log(res)
              setUsers(res.data)
          })
        },[]);

        function deleteData(_id){
          axios.delete("http://localhost:4000/moviedel/"+_id).then((res)=>{
            alert('Data deleted')
            // to automatically reload site
            window.location.reload()
          }).catch((error)=>{
            console.log(error)
          })
        }

        function deleteData(_id){
          axios.delete("http://localhost:4000/moviedel/"+_id).then((res)=>{
            alert('Data deleted')
            // to automatically reload site
            window.location.reload()
          }).catch((error)=>{
            console.log(error)
          })
        }

<h1 style={{color:'black',fontFamily: 'Lobster'}}>User List</h1>
  return (
    
    <Box
      sx={{
        position: 'relative',
        backgroundImage: 'url(https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTExL2FuZ3VzdGVvd19tdXRlZF9icm93bl92aW50YWdlX2Jvb2tfcGF0dGVybl81ZDA3YjRlNC0yNzBhLTQ4ZTEtODg4NS0yOWMxMTk2OTVlMjRfMS5qcGc.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 900,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 1,
      }}
      >
        
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <TableContainer component={Paper} style={{ width: '100%' , backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
        <Table sx={{ minWidth: 800 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><b>NAME</b></TableCell>
              <TableCell align="center"><b>EMAIL</b></TableCell>
              <TableCell align="center"><b></b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell component="th" scope="row">
                  {user.Name}
                </TableCell>
                <TableCell align="center">{user.Email}</TableCell>
                <TableCell align="center">
                  {/* <Button variant="contained" color="secondary" onClick={() => removeItem(row.id)}>Remove</Button> */}
                  <Button variant="contained" sx={{backgroundColor: "red"}} onClick= {()=>{deleteData(user._id);}}>Remove</Button>
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

export default Userlist;