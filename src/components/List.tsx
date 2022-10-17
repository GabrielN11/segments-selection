import { Box, ListItemButton, ListItemText, Typography } from '@mui/material'
import React from 'react'
import Segment from '../models/Segment'

type Props = {
  segments: Segment[]
  setSelecting: any,
  setSelectedSegment: any,
}

/*
  Este componente exibe a lista de segmentos procurados, recebe como propriedade
  os segmentos e dois sets para alterar os respectivos estados quando um segmento é selecionado.
*/
function List({ segments, setSelecting, setSelectedSegment }: Props) {

  //Altera os estados quando um segmento é selecionado.
  function handleClick(segment: Segment){
    setSelectedSegment(segment)
    setSelecting(false)
  }

  return (
    <Box display='flex' flexDirection='column' alignItems='stretch' alignSelf='stretch'>
      {segments.length === 0 && <Box component='div' bgcolor='rgb(245, 245, 245)' color='rgb(137, 137, 137)'
        border='1px solid rgb(137, 137, 137)' padding='5px' textAlign='center' marginTop='40px' alignSelf='stretch'>
        <Typography>Informe acima o segmento para continuar.</Typography>
      </Box>}
      {segments.map(segment => (
        <ListItemButton key={segment.id} component="button" sx={{alignSelf: 'stretch' }}
        onClick={() => handleClick(segment)}>
          <ListItemText primary={segment.descricao} sx={{
            backgroundColor: 'rgb(245, 245, 245)', color: 'rgb(137, 137, 137)',
            border: '1px solid rgb(137, 137, 137)', padding: '5px', textAlign: 'center'
          }} />
        </ListItemButton>
      ))}
    </Box>
  )
}

export default List