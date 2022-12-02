import React, { useState } from "react";

import ChevronRight from '@mui/icons-material/ChevronRight';
import ListItemButton from "@mui/material/ListItemButton";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Box, Collapse, Divider, List, ListItemText } from "@mui/material";

const style = {
  box: {
    width: '100%',
    maxWidth: '50rem',
    margin: '0 2.5rem 1rem',
    border: '1px solid #000',
    borderRadius: '1rem'
  },
  text: {
    padding: '0.5rem 1.5rem'
  },
  icon: {
    alignSelf: 'center',
    fontSize: '1.75rem',
    marginLeft: '0.75rem'
  }
}

export function Item({ item }) {
  const [open, setOpen] = useState(false);
  
  if (item.description) {

    const handleClick = () => {
      setOpen(!open);
    };

    return (
      <Box
        sx={style.box}
      >
        <ListItemButton sx={{ borderRadius: '1rem' }} onClick={handleClick}>
          <ListItemText sx={style.text} primary={item.option} />
          <Divider orientation="vertical" flexItem />
          {open ? <ExpandMore sx={style.icon} /> : <ChevronRight sx={style.icon} />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemText sx={style.text} primary={item.description} />
          </List>
        </Collapse>
      </Box>
    )
  }

  return (
    <Box
      sx={style.box}
    >
      <ListItemButton component="a" href={item.link} sx={{ borderRadius: '1rem' }}>
        <ListItemText sx={style.text} primary={item.option} />
        <Divider orientation="vertical" flexItem />
        <ChevronRight sx={style.icon} />
      </ListItemButton>
    </Box>
  )
}