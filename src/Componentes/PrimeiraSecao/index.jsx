import React from 'react'
import style from './primeirasecao.module.css'
import logo from '../../assets/images/logo.png'
import selos from '../../assets/images/seloscomprasegura.png'
import Botao from '../Botao'

export default function PrimeiraSecao() {
    return (
        <main className={style.conteudo__primeira__secao}>
            <section className={style.container__primeira__secao__texto}>
                <img src={logo} alt="Logo" loading="lazy" className={style.primeira__secao__imagens}/>
                <h1 className={style.primeira__secao__titulo}>Qual o segredo das famosas para uma pele sempre bela?</h1>
                <h2 className={style.primeira__secao__subtitulo}>É esse segredo que o Revera Caps quer mostrar para você! A capsula que pode devolver o poder e firmeza de sua pele como mágica.</h2>
                <Botao targetId="SecaoComprar">
                    Quero Restaurar Minha Pele!
                </Botao>
                <img src={selos} alt="Selos Compra Segura" loading="lazy" className={style.primeira__secao__imagens}/>
            </section>
        </main>
    )
}
