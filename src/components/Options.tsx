import { Box, Button } from '@mui/material'
import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CheckIcon from '@mui/icons-material/Check';
import Link from 'next/link';

type Props = {
  selecting: boolean
}

export default function Options({ selecting }: Props) {
  return (
    <Box display='flex' alignSelf='stretch' gap={{
      xs: '10px',
      md: '20px'
    }}>
      <Button variant="outlined" startIcon={<ArrowBackIosIcon />} sx={{ paddingX: '20px' }}>
        Voltar
      </Button>
      {!selecting && <Link href='/registered'>
        <Button variant="contained" startIcon={<CheckIcon />} fullWidth>
          Finalizar Cadastro
        </Button>
      </Link>}
    </Box>
  )
}