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

const Search = ({ setSelecting, selecting, setSelectedSegment }: Props) => {
  const [segments, setSegments] = React.useState<Segment[]>([])
  const [error, setError] = React.useState<boolean>(false)

  async function getSegments(e: React.ChangeEvent<HTMLInputElement>): Promise<void>{
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
        onChange={getSegments} />
        <List segments={segments} setSelectedSegment={setSelectedSegment} setSelecting={setSelecting}/>
        {error && <Error/>}
      </Box>
    </Grow>
  )
}

export default Search