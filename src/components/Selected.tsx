import { Typography, Box, IconButton, Grow } from '@mui/material'
import React from 'react'
import EditIcon from '@mui/icons-material/EditOutlined';
import Segment from '../models/Segment';

type Props = {
    segment: Segment,
    setSelecting: any,
    selecting: boolean,
}

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