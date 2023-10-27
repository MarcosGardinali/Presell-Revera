import React from 'react'
import style from './conteudo.module.css'
import SecaoIntroducao from '../SecaoIntroducao'
import SecaoComplementar from '../SecaoComplementar'

export default function Conteudo() {
  return (
    <main className={style.conteudo}>
      <SecaoIntroducao />
      <SecaoComplementar />
    </main>
  )
}
