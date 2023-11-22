import React from 'react'
import style from './secaoia.module.css'
import Botao from '../Botao'

export default function SecaoIa() {
  return (
    <main className={style.conteudo__secao__ia}>
      <h2 className={style.secao__ia__titulo}>Conheça a Mia, Nossa Inteligência Artificial Criada Especialmente Para Cuidar de Você</h2>
      <iframe title='Video IA' frameBorder="0" allowFullScreen={false} src="https://scripts.converteai.net/9c406607-df4f-48d9-bc4d-d4c23c7d136a/players/6467728f74656e000927da50/embed.html" id="ifr_6467728f74656e000927da50" className={style.secao__ia__video} referrerPolicy="origin"></iframe>
      <Botao targetId="SecaoComprar">
        Quero Restaurar Minha Pele!
      </Botao>
      <p className={style.secao__ia__texto__satisfacao}>Compra 100% Segura e Satisfação Garantida!</p>
    </main>
  )
}
