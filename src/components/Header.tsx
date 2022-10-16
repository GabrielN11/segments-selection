import { Box, Typography } from '@mui/material'
import SegmentIcon from '@mui/icons-material/Segment';
import React from 'react'

/*
  Header da página.
*/
export default function Header() {
  return (
    <Box component='header' display='flex' alignItems='center' justifyContent='center' marginY='30px'>
        <SegmentIcon color='primary' fontSize='large' sx={{marginRight: '10px'}}/>
        <Typography variant="h1" color="primary" fontSize={{
                xs: 22,
                sm: 25,
                md: 44
        }}>
            Segmento da Empresa
        </Typography>
    </Box>
  )
}