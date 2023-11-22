import React from 'react'
import style from './secaocomprar.module.css'
import DezPotes from '../../assets/images/comprar10potes.png'
import CincoPotes from '../../assets/images/comprar5potes.png'
import TresPotes from '../../assets/images/comprar3potes.png'
import UmPote from '../../assets/images/comprar1pote.png'

export default function SecaoComprar() {
  return (
    <main className={style.conteudo__secao__comprar} id='SecaoComprar'>
      <h3 className={style.secao__comprar__titulo}>Escolha Seu Kit E Tenha Uma Pele Perfeita</h3>
      <section className={style.container__valores}>
        <a href='https://bit.ly/46xnNMR' className={style.card__valores}>
          <img className={style.card__valores__imagem} src={DezPotes} alt="Dez Potes" />
        </a>
        <a href='https://bit.ly/3MWzVjw' className={style.card__valores}>
          <img className={style.card__valores__imagem} src={CincoPotes} alt="Cinco Potes" />
        </a>
        <a href='https://bit.ly/3sIc7cz' className={style.card__valores}>
          <img className={style.card__valores__imagem} src={TresPotes} alt="Três Potes" />
        </a>
        <a href='https://bit.ly/3RaYmMI' className={style.card__valores}> 
          <img className={style.card__valores__imagem} src={UmPote} alt="Um Pote" />
        </a>
      </section>
    </main>
  )
}
