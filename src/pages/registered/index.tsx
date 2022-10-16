import React from 'react'
import type { NextPage } from 'next'
import { Box, Container, Grow, Typography } from '@mui/material'
import DoneIcon from '@mui/icons-material/Done';



//Página que simula a finalização do cadastro.
const Registered: NextPage = () => {
    return (
        <Container maxWidth='sm'>
            <Grow in={true}>
                <Box height='350px' display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='20px'>
                    <Typography variant='h1' color='primary' fontSize={30}>Cadastrado com sucesso!</Typography>
                    <DoneIcon color='primary' fontSize='large' />
                </Box>
            </Grow>
        </Container>
    )
}

export default Registered