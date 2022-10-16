import { Container } from '@material-ui/core'
import type { NextPage } from 'next'

import Header from '../components/Header'
import Error from '../components/Error'
import Main from '../components/Main'
import Segment from '../models/Segment'
import fetchData from '../utils/fetch'

type InitialProps = {
  segment: Segment,
  error: boolean
}


export async function getServerSideProps() {
  try {
    const segments = await fetchData('Serviços de Beleza')
    return {
      props: {
        segment: segments[0],
        error: false
      },
    }
  } catch (e) {
    return {
      props: {
        segment: {
          id: 0,
          name: 'Vazio'
        },
        error: true
      }
    }
  }
}


const Home: NextPage<InitialProps> = (props) => {
  return (
    <Container maxWidth='sm'>
      <Header />
      <Main segment={props.segment} />
      {props.error && <Error/>}
    </Container>
  )
}

export default Home
