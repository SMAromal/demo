import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  sx={{ backgroundImage: 'linear-gradient(to bottom right, #D2B48C, #F5DEB3)'}}>
        <Toolbar>
        <Box component="img" src={"https://png.pngtree.com/template/20190316/ourmid/pngtree-books-logo-image_79143.jpg"} alt="book" sx={{  height: 50, marginRight: 126}} align="left" />
        <Link to={'/'}><Button style={{ color: 'lightyellow',background: 'sandybrown',margin: 15}}>Sign Up</Button></Link>
        <Link to={'/login'}><Button style={{ color: 'lightyellow',background: 'sandybrown' }}>Log in</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;