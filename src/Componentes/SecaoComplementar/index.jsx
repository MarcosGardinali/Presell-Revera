import React from 'react'
import style from './secaocomplementar.module.css'
import potes from '../../assets/images/potes.png'
import Botao from '../Botao'

export default function SecaoComplementar() {
  return (
    <main className={style.conteudo__secao__complementar}>
        <img className={style.secao__complementar__imagem} src={potes} alt="Potes Revera" />
        <section className={style.secao__complementar__conatiner__textos}>
            <h3 className={style.secao__complementar__titulo}>Desenvolvido e Recomendado Por Especialistas!</h3>
            <p className={style.secao__complementar__texto}>Desvende o Elixir da Juventude e Os Segredos da Sua Fórmula Com Efeito Firmador Único.</p>
            <p className={style.secao__complementar__texto}>Faça o Teste Por 3 Meses e Descubra o Poder do Resveratrol, Biotina, Retinol, Ácido Hialurônico e Colágeno Verisol na Sua Pele.</p>
            <p className={style.secao__complementar__texto}>Invista em um ano de tratamento e leve 10 potes por apenas 12x de R$69,98, ganhando mais 2 potes de brinde!</p>
            <Botao>
                Quero Restaurar Minha Pele!
            </Botao>
        </section>
    </main>
  )
}
