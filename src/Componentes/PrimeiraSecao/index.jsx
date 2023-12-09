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
                <h1 className={style.primeira__secao__titulo}>Descubra o Segredo da Juventude: Revera Caps - A Revolução em Cuidados com a Pele!</h1>
                <h2 className={style.primeira__secao__subtitulo}>Cansada de lutar contra o envelhecimento da pele? Apresentamos a solução definitiva: Revera Caps, a pílula do rejuvenescimento que vai transformar sua pele como nunca antes!</h2>
                <Botao targetId="SecaoComprar">
                    Quero Restaurar Minha Pele!
                </Botao>
                <img src={selos} alt="Selos Compra Segura" loading="lazy" className={style.primeira__secao__imagens}/>
            </section>
        </main>
    )
}
