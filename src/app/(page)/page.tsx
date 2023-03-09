import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Link href="/painel">Ir para Painel</Link>
      <Link href="/contato">Ir para Contato</Link>
      home
    </div>
  )
}
