import React from 'react'
import style from './conteudo.module.css'
import SecaoIntroducao from '../SecaoIntroducao'
import SecaoIa from '../SecaoIa'
import SecaoEfeitos from '../SecaoEfeitos'
import SecaoDepoimentos from '../SecaoDepoimentos'
import SecaoComponentes from '../SecaoComponentes'
import SecaoSatisfacao from '../SecaoSatisfacao'
import SecaoAtencao from '../SecaoAtencao'
import SecaoComprar from '../SecaoComprar'
import SecaoDuvidas from '../SecaoDuvidas'
import PrimeiraSecao from '../PrimeiraSecao'
import SecaoWhats from '../SecaoWhats'
import whats from '../../assets/images/whats.png'


export default function Conteudo() {
  return (
    <main className={style.conteudo}>
      <PrimeiraSecao/>
      <SecaoIntroducao />
      <SecaoIa />
      <SecaoWhats />
      <SecaoEfeitos />
      <SecaoDepoimentos />
      <SecaoComponentes />
      <SecaoSatisfacao />
      <SecaoAtencao />
      <SecaoComprar />
      <SecaoDuvidas />
    
      <div className={style.whatsapp__button}>
        <a href="https://api.whatsapp.com/send/?phone=5514998622783&text=Olá! Tenho interesse em conhecer o Revera Caps!&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className={style.conteudo__whatsapp__button}>
            <img src={whats} alt="WhatsApp" loading="lazy"/>
        </a>
      </div>

    </main>
  )
}
