import { TextField, Box, Grow } from '@mui/material'
import React from 'react'
import Segment from '../models/Segment'
import fetchData from '../utils/fetch'
import Error from './Error'
import List from './List'

type Props = {
  setSelecting: any,
  selecting: boolean,
  setSelectedSegment: any,
}

/*
  Neste componente é realizado a busca pelos segmentos, ele recebe como propriedades
  o setSelecting para alterar o estado de selecting para falso quando um segmento é
  selecionado, o selecting para realizar animação do componente Grow, e o setSelectedSegment
  para alterar o segmento selecionado.
*/
const Search = ({ setSelecting, selecting, setSelectedSegment }: Props) => {

  //Este estado é preenchido pela lista de segmentos vindas da API
  const [segments, setSegments] = React.useState<Segment[]>([])

  /*Este estado, que por padrão é falso, é alterado caso haja um erro de consulta na API, 
  habilitando o componente de mensagem de erro*/
  const [error, setError] = React.useState<boolean>(false)

  /*
    Função que consulta os dados da API conforme o evento onChange ocorre, enviando os
    dados digitados pelo usuário para realizar a busca e preenchendo os segmentos recebidos
    no estado segments. Caso haja um erro, o estado error é setado como true.
  */
  async function getSegments(e: React.ChangeEvent<HTMLInputElement>): Promise<void>{
    if(e.target.value === '' || e.target.value.length > 35) return
    try{
      const data = await fetchData(e.target.value)
      setSegments(data)
    }catch(e){
      setError(true)
    }
  }

  return (
    <Grow in={selecting}>
      <Box component='div' display='flex' flexDirection='column' alignSelf='stretch' alignItems='center' marginY='50px' gap='15px'>
        <TextField id="outlined-basic" variant="outlined" placeholder='Ex: Alimentos e Bebidas' sx={{ alignSelf: 'stretch' }}
        onChange={getSegments} inputProps={{maxLength: 35}}/>
        <List segments={segments} setSelectedSegment={setSelectedSegment} setSelecting={setSelecting}/>
        {error && <Error/>}
      </Box>
    </Grow>
  )
}

export default Search