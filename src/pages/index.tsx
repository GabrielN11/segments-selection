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


/*Esta função realiza um Server Side Render do primeiro produto "Serviços de Beleza" através de uma
consulta na API. Ela retorna um segmento único e um código de erro booleano.
*/
export async function getServerSideProps() {
  try {
    const segments = await fetchData('Beleza')
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


/*
  Componente da página principal, recebe um segmento renderizado no lado do servidor
  e um código de erro caso haja um problema na consulta da API, exibindo uma
  mensagem de erro.
*/
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
