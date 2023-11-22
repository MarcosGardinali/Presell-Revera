import React from 'react'
import style from './secaocomponentes.module.css'
import Botao from '../Botao'
import Resveratrol from '../../assets/images/Resveratrol.png'
import Acido from '../../assets/images/Acidohialuronico.png'
import Colageno from '../../assets/images/Colageno.png'
import Retinol from '../../assets/images/Retinol.png'
import Biotina from '../../assets/images/Biotina.png'
import CardComponentes from './CardComponentes'

export default function SecaoComponentes() {
  return (
    <main className={style.conteudo__secao__componentes}>
        <h2 className={style.secao__componentes__titulo}>Desenvolvida e Recomendada Por Especialistas</h2>
      <h3 className={style.secao__componentes__subtitulo}>Desvende o Elixir da Juventude e os Segredos da Sua Fórmula com Efeito Firmador Único</h3>
      <section className={style.container__cards__componentes}>
        <CardComponentes imagem={Resveratrol} alt="Resveratrol" titulo="Resveratrol" descricao="A estrela da composição, o Resveratrol é o colágeno com nanotecnologia americana exclusiva, que tem sido febre nos EUA. Trata a hiperpigmentação da derme causada pelos raios UVB e ações do tempo. Além de ser antioxidante, anti-inflamatório, tratando a irritabilidade da pele e diminuindo a vermelhidão. Sobretudo, é o mais PODEROSO redutor dos efeitos do envelhecimento, diminuindo a flacidez da pele, oferecendo mais maciez e frescor." />
        <CardComponentes imagem={Acido} alt="Ácido Hialurônico" titulo="Ácido Hialurônico" descricao="Preenche e revitaliza a pele, mantendo a sustentação natural, o que promove o efeito lifting e firmador, de dentro para fora. Suaviza as linhas de expressão e marcas causadas pelo tempo." />
        <CardComponentes imagem={Colageno} alt="Colágeno" titulo="Colágeno Verisol" descricao="Único colágeno do mercado que tem seus benefícios comprovados cientificamente. O Verisol possui peptídeos bioativos capazes de promover o aumento significativo da produção de colágeno do organismo. Trazendo muito mais firmeza, elasticidade, hidratação e o efeito pele luminosa." />
        <CardComponentes imagem={Retinol} alt="Retinol" titulo="Retinol" descricao="Reduz rugas, marcas de expressão, a partir do controle da produção de colágeno pelo organismo e a renovação celular. Promovendo mais firmeza e o efeito lifting tão desejado." />
        <CardComponentes imagem={Biotina} alt="Biotina" titulo="Biotina" descricao="Bioestimulador de colágeno e queratina, trazendo mais elasticidade e uma pele mais forte e tonificada. Contribui para a hidratação e previne o ressecamento." />
      </section>
      <Botao targetId="SecaoComprar">
        Quero Restaurar Minha Pele!
      </Botao>
      <p className={style.secao__ia__texto__satisfacao}>Compra 100% Segura e Satisfação Garantida!</p>
    </main>
  )
}
