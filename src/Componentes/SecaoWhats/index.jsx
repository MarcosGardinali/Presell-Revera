import React from 'react'
import whats from '../../assets/images/whats.png'
import selo from '../../assets/images/seloscomprasegurapreto.png'
import style from './secaowhats.module.css'

export default function SecaoWhats() {
  return (
    <section className={style.conteudo__secao__whats}>
        <h1 className={style.titulo__secao__whats}>Tire todas as suas dúvidas com a nossa consultoria!</h1>
        <p className={style.texto__secao__whats}>Se você possui dúvidas e deseja falar direto com uma de nossas consultoras, disponibilizamos um Whatsapp EXCLUSIVO. Descubra agora o segredo das famosas</p>
        <a href="https://api.whatsapp.com/send/?phone=5514998622783&text=Olá! Tenho interesse em conhecer o Revera Caps!&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className={style.conteudo__whatsapp__button}>
            <img src={whats} alt="Botão de WhatsApp" />
            <p>CHAMAR NO WHATSAPP</p>
        </a>
        <img className={style.imagem__selo} src={selo} alt="Selo site seguro" />
        <hr className={style.linha}/>
    </section>
  )
}