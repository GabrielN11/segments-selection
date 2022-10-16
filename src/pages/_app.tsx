import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Head from 'next/head'

//Altera o tema padrão do Material UI.
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: 'rgb(34, 157, 228)',
      contrastText: '#fff'
    },
    secondary: {
      main: 'rgb(137, 137, 137)'
    }
  },
  typography: {
    fontFamily: 'Roboto, Arial',
  },
})



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <Head>
        <title>Seleção de Segmentos</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
