import { AppBar, Box, Button, Toolbar, useMediaQuery } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ width: '100%' }}> {/* Ensures full width */}
      <AppBar position="fixed" sx={{ top: 0, left: 0, right: 0, background: 'lightgreen' }}>
        <Toolbar>
          <Box
            component="img"
            src="https://png.pngtree.com/template/20190316/ourmid/pngtree-books-logo-image_79143.jpg"
            alt="book"
            sx={{ height: 50, marginRight: isMobile ? 2 : 119 }}
          />
          <Box sx={{ flexGrow: 1 }} />
          <Link to={'/'}>
            <Button sx={{ color: 'lightyellow', background: 'green', padding: isMobile ? '5px 10px' : '8px 16px' }}>
              Home
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
