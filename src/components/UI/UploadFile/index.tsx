import React from 'react'
import { Container } from './styles'

const UploadFile = () => {
  return (
    <Container>
      <label>
        <p>Selecione o arquivo</p>
        <input type="file" />
        <button>Buscar</button>
      </label>
    </Container>
  )
}

export default UploadFile
