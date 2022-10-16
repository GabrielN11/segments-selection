import { Typography } from '@mui/material'
import React from 'react'
import { Box } from '@mui/material'
import Selected from './Selected'
import Options from './Options'
import Search from './Search'
import Segment from '../models/Segment'


type Props = {
  segment: Segment
}

//Componente principal, recebe como propriedade o segmento renderizado no servidor.
const Main = ({segment}: Props) => {
  
  /*Este estado define se o usuário está escolhendo um novo segmento,
  caso esteja, alguns componentes não são exibidos enquanto outros são.*/
  const [selecting, setSelecting] = React.useState<boolean>(false)

  /* Este estado representa o segmento selecionado pelo usuário, por padrão
  é usado o segmento renderizado no servidor*/
  const [selectedSegment, setSelectedSegment] = React.useState<Segment>(segment)
  
  return (
    <Box component="main" display='flex' flexDirection='column' alignItems='center'>
      <Typography color='secondary'>
        {selecting ? 'Confirme o segmento que sua empresa atua para personalizarmos sua experiência em nosso aplicativo.' :
        'Selecione abaixo o segmento que mais se aproxima com o ramo de atividade de sua empresa.'}
      </Typography>
        {selecting ? <Search setSelecting={setSelecting} selecting={selecting} setSelectedSegment={setSelectedSegment}/> : 
        <Selected segment={selectedSegment} setSelecting={setSelecting} selecting={selecting}/>}
      <Options selecting={selecting}/>
    </Box>
  )
}

export default Main