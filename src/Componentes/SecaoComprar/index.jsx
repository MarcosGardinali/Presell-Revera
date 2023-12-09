import React from 'react'
import style from './secaocomprar.module.css'
import DezPotes from '../../assets/images/comprar10potes.png'
import CincoPotes from '../../assets/images/comprar5potes.png'
import TresPotes from '../../assets/images/comprar3potes.png'
import UmPote from '../../assets/images/comprar1pote.png'

export default function SecaoComprar() {
  return (
    <main className={style.conteudo__secao__comprar} id='SecaoComprar'>
      <h3 className={style.secao__comprar__titulo}>QUERO UMA PELE PERFEITA! Escolha seu kit agora e experimente a personalização única de Revera Caps. Transforme sua derme com a tecnologia inovadora que se adapta perfeitamente a todos os tipos de pele. Clique para revitalizar sua beleza!</h3>
      <section className={style.container__valores}>
        <a href='https://bit.ly/46xnNMR' className={style.card__valores}>
          <img className={style.card__valores__imagem} src={DezPotes} alt="Dez Potes" loading="lazy"/>
        </a>
        <a href='https://bit.ly/3MWzVjw' className={style.card__valores}>
          <img className={style.card__valores__imagem} src={CincoPotes} alt="Cinco Potes" loading="lazy"/>
        </a>
        <a href='https://bit.ly/3sIc7cz' className={style.card__valores}>
          <img className={style.card__valores__imagem} src={TresPotes} alt="Três Potes" loading="lazy"/>
        </a>
        <a href='https://bit.ly/3RaYmMI' className={style.card__valores}> 
          <img className={style.card__valores__imagem} src={UmPote} alt="Um Pote" loading="lazy"/>
        </a>
      </section>
    </main>
  )
}
