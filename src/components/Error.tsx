import React from 'react'
import { Alert, Snackbar } from '@mui/material'

const Error = () => {
  return (
    <Snackbar open={true}>
        <Alert variant="filled" severity="error">
          Houve um erro de conexão não esperado com a API.
        </Alert>
      </Snackbar>
  )
}

export default Error