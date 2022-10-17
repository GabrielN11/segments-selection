import { Typography, Box, IconButton, Grow } from '@mui/material'
import React from 'react'
import EditIcon from '@mui/icons-material/EditOutlined';
import Segment from '../models/Segment';

type Props = {
    segment: Segment,
    setSelecting: any,
    selecting: boolean,
}

/*
    Este componente exibe o segmento selecionado, além do botão para habilitar
    a busca por outros segmentos. Recebe como propriedade o segmento, o setSelecting
    para habilitar a busca de segmentos e o selecting para habilitar a animação do componente Grow.
*/
export default function Selected({ segment, setSelecting, selecting }: Props) {
    return (
        <Grow in={!selecting}>
            <Box component="div" display='flex' flexDirection='row' alignItems='center' gap='10' marginY='50px'>
                <Typography color='primary' fontSize={{
                    xs: 22,
                    sm: 25,
                    md: 44
                }}>{segment.name}</Typography>
                <IconButton color='primary' aria-label='editar' onClick={() => setSelecting(true)}>
                    <EditIcon fontSize='large' />
                </IconButton>
            </Box>
        </Grow>
    )
}