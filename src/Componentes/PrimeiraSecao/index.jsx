import React from 'react'
import style from './primeirasecao.module.css'
import logo from '../../assets/images/logo.png'
import selos from '../../assets/images/seloscomprasegura.png'
import Botao from '../Botao'

export default function PrimeiraSecao() {
    return (
        <main className={style.conteudo__primeira__secao}>
            <section className={style.container__primeira__secao__texto}>
                <img src={logo} alt="Logo" className={style.primeira__secao__imagens}/>
                <h1 className={style.primeira__secao__titulo}>Pílula do Rejuvenescimento desenvolvida com Colágeno de Nanotecnologia Americana!</h1>
                <h2 className={style.primeira__secao__subtitulo}>Bastam duas pílulas por dia. Poder e firmeza como NUNCA vistos!</h2>
                <Botao>
                    Quero Restaurar Minha Pele!
                </Botao>
                <img src={selos} alt="Selos Compra Segura" className={style.primeira__secao__imagens}/>
            </section>
        </main>
    )
}
