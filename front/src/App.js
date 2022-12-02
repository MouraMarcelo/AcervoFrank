
import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import { MenuBar } from './components/MenuBar';
import { SideBar } from './components/SideBar';
import { Table } from './pages/LuzTransmitida/Table';
import { ScrollTop } from './components/ScrollToTop';
import { Fab } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const drawerWidth = 320;

function App(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const container = window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <MenuBar
        drawerWidth={drawerWidth}
        menuToggle={() => handleDrawerToggle()}
      />
      <Box
        component='nav'
        sx={{
          flexShrink: { md: 0 },
          width: { md: drawerWidth }
        }}
        aria-label='menu'
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <SwipeableDrawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, scrollbarGutter: 'stable', background: '#f5f5f5' }
          }}
        >
          <SideBar />
        </SwipeableDrawer>
        <SwipeableDrawer
          variant='permanent'
          sx={{
            display: { xs: 'none', sm: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, scrollbarGutter: 'stable', background: '#f5f5f5' }
          }}
          open
        >
          <SideBar />
        </SwipeableDrawer>
      </Box>
      <Box
        component='main'
        sx={{ flexGrow: 1, px: 4, py: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar
          id='back-to-top-anchor'
        />
        <Table />
      </Box>

      <ScrollTop elevation='0' {...props}>
        <Fab size="medium" aria-label="scroll back to top" sx={{ borderRadius: '0.5rem', border: '1px solid #000', background: '#fff', boxShadow: 'none, rgba(0, 0, 0, 0.16) 0px 1px 4px' }}>
          <ArrowUpwardIcon />
        </Fab>
      </ScrollTop>
    </Box>
  );
}

export default App;
