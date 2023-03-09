import Link from 'next/link'
import React from 'react'
import { Container } from './styles'

export default function Login() {
  return (
    <Container>
      <Link href="/">Voltar para home</Link>
      <h1>Login</h1>
    </Container>
  )
}
