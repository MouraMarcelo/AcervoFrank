import React, { useState } from 'react';

import Link from '@mui/material/Link';
import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';

import ExpandMore from '@mui/icons-material/ExpandMore';
import ChevronRight from '@mui/icons-material/ChevronRight';

export function SideBar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 320,
        height: '100vh',
        background: '#F5F5F5',
        p: 1
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton sx={{ borderRadius: '8px' }}>
        <ListItemAvatar>
          <Avatar
            src='static/images/logo.png'
          />
        </ListItemAvatar>
        <ListItemText
          // sx={{ blockSize: 'fit-content' }}
          primaryTypographyProps={{
            fontFamily: "'Rokkitt', serif",
            fontWeight: 'medium',
            variant: 'h4',
          }}
          primary="Acervo Frank" />
      </ListItemButton>

      <ListItem sx={{ borderRadius: '8px' }}>
        <ListItemText primary="Índice Alfabético" />
      </ListItem>
      <ListItemButton sx={{ borderRadius: '8px' }}>
        <ListItemText primary="Luz Transmitida: que mineral é esse?" />
      </ListItemButton>
      <ListItem sx={{ borderRadius: '8px' }}>
        <ListItemText primary="Luz Refletida: que mineral é esse?" />
      </ListItem>
      <ListItem sx={{ borderRadius: '8px' }}>
        <ListItemText primary="Minerais com Fluorecência" />
      </ListItem>

      <Divider sx={{ marginX: 1 }} />

      <ListItem sx={{ borderRadius: '8px' }}>
        <ListItemText primary="Sobre" />
      </ListItem>
      <ListItemButton sx={{ borderRadius: '8px' }} onClick={handleClick}>
        <ListItemText primary="Downloads" />
        {open ? <ExpandMore /> : <ChevronRight />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ borderRadius: '8px', pl: 4 }}>
            <Link href="https://www.ufrgs.br/minmicro/GuiaPPTransparentes.pdf" color="inherit" target="_blank" underline="hover">
              {'Guia de Identificação de Minerais Transparentes pelo Método passo a passo.'}
            </Link>
          </ListItemButton>
          <ListItemButton sx={{ borderRadius: '8px', pl: 4 }}>
            <Link href="https://www.ufrgs.br/minmicro/GuiaPPOpacos.pdf" color="inherit" target="_blank" underline="hover">
              {'Guia de Identificação de Minerais Opacos pelo Método passo a passo.'}
            </Link>
          </ListItemButton>
        </List>
      </Collapse>
      <ListItem sx={{ borderRadius: '8px' }}>
        <ListItemText primary="Blog" />
      </ListItem>

      <Divider sx={{ marginX: 1 }} />

      <ListItem sx={{ borderRadius: '8px' }}>
        <ListItemText primary="Heinrich Frank" secondary="geoprof.frank@gmail.com" />
      </ListItem>
      <ListItem sx={{ borderRadius: '8px' }}>
        <ListItemText primary="Marcelo Moura" secondary="moura.marcelo@aluno.unb.br" />
      </ListItem>
    </List>
  );
}
