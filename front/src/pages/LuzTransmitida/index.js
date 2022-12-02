import React from 'react';

import { Typography } from '@mui/material';
import { Box } from '@mui/system';

import data from '../../api/luz-transmitida.json';
import { Item } from '../../components/Item';

export function LuzTransmitida() {
  const { title, items } = data;

  return (
    <Box
      component='div'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '1rem 2.5rem'
      }}
    >
      <Typography
        variant='h4'
        fontWeight='medium'
        sx={{
          textAlign: 'center',
          marginBottom: '2rem',
          maxWidth: '32rem'
        }}
      >
        {title}
      </Typography>

      <Typography
        variant='h5'
        align='left'
      >
        O Mineral:
      </Typography>

      {
        items.map(item => {
          return <Item item={item} />
        })
      }
    </Box >
  )
}