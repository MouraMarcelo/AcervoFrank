import React from 'react';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import Search from '@mui/icons-material/Search';
import GitHub from '@mui/icons-material/GitHub';
import Settings from '@mui/icons-material/Settings';

export function MenuBar({ drawerWidth, menuToggle }) {
  return (
    <AppBar
      sx={{
        width: { md: `calc(100% - ${drawerWidth}px)` },
        ml: { md: `${drawerWidth}px` },
        background: '#ffffff',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
      }}
      elevation={0}
      color='default'
    >
      <Toolbar>
        <IconButton
          aria-label='menu'
          onClick={menuToggle}
          sx={{ mr: 2, color: '#000000', display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end' }}>
          <IconButton sx={{ color: '#000000' }}>
            <Search />
          </IconButton>
          <IconButton sx={{ color: '#000000' }} href='https://github.com/MouraMarcelo/AcervoFrank' target='_blank'>
            <GitHub />
          </IconButton>
          <IconButton sx={{ color: '#000000' }}>
            <Settings />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}