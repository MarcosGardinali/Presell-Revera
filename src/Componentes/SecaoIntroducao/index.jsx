import React from 'react'
import style from './secaointroducao.module.css'
import { FaCheckDouble } from 'react-icons/fa6';
import mulher from '../../assets/images/mulher.png'

export default function SecaoIntroducao() {
  return (
    <main className={style.conteudo__introducao}>
        <section className={style.introducao__textos}>
            <h1 className={style.introducao__textos__titulo}>Pílula Do Rejuvenescimento Desenvolvida Com Colágeno De Nanotecnologia Americana!</h1>
            <h2 className={style.introducao__textos__subtitulo}>Bastam Duas Pílulas Por Dia. Poder e Firmeza Como Nunca Vistos!</h2>
            <p className={style.introducao__textos__beneficios}><FaCheckDouble size={16} color='#9D00EC' />Uniformiza o tom da pele</p>
            <p className={style.introducao__textos__beneficios}><FaCheckDouble size={16} color='#9D00EC' />Efeito clareador de manchas</p>
            <p className={style.introducao__textos__beneficios}><FaCheckDouble size={16} color='#9D00EC' />Equilibra a oleosidade</p>
            <p className={style.introducao__textos__beneficios}><FaCheckDouble size={16} color='#9D00EC' />Efeito firmador</p>
            <p className={style.introducao__textos__beneficios}><FaCheckDouble size={16} color='#9D00EC' />Rejuvenescimento de dentro para fora</p>
            <p className={style.introducao__textos__beneficios}><FaCheckDouble size={16} color='#9D00EC' />Pele mais firme e hidratada</p>
        </section>
        <section className={style.introducao__imagem}>
            <img src={mulher} alt="Foto" />
            <h2 className={style.imagem__subtitulo}>"Apenas Duas Cápsulas Por Dia e Eu Cuido Da Minha Pele e Do Meu Organismo. Esse é o Colágeno Que Eu Escolhi Pra Vida!"</h2>
            <p className={style.imagem__nome}>Angel Top Loba</p>
        </section>
    </main>
  )
}
