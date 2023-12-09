import React from 'react'
import style from './secaoefeitos.module.css'
import Botao from '../Botao'
import CardsEfeitos from './CardsEfeitos'
import Efeito1 from '../../assets/images/Efeito1.png'
import Efeito2 from '../../assets/images/Efeito2.png'
import Efeito3 from '../../assets/images/Efeito3.png'
import Efeito4 from '../../assets/images/Efeito4.png'
import Efeito5 from '../../assets/images/Efeito5.png'
import Efeito6 from '../../assets/images/Efeito6.png'
import Efeito7 from '../../assets/images/Efeito7.png'
import Efeito8 from '../../assets/images/Efeito8.png'


export default function SecaoEfeitos() {
  return (
    <main className={style.conteudo__secao__efeitos}>
      <h2 className={style.secao__efeitos__titulo}>Revera Caps é Formulado com Ativos Naturais Exclusivos que Promove Efeito Pele Jovem</h2>
      <h3 className={style.secao__efeitos__subtitulo}>Skincare Mais Potente e 100% Natural Que Trata a Derme De Dentro Para Fora, Sem Efeito Reboot.</h3>
      <section className={style.container__cards__efeitos}>
        <CardsEfeitos imagem={Efeito1} alt="Efeito 1" titulo="Uniformiza o tom da pele" descricao="Obtenha uma pele radiante e uniforme! Nossa fórmula exclusiva, desenvolvida por especialistas, trabalha para eliminar manchas indesejadas e proporcionar um tom de pele impecável, restaurando sua confiança." />
        <CardsEfeitos imagem={Efeito2} alt="Efeito 2" titulo="Trata a acne e desobstrui os poros" descricao="Diga adeus à acne e poros obstruídos! Revera Caps age profundamente, equilibrando a oleosidade da pele e limpando os poros, promovendo uma pele mais saudável, livre de imperfeições." />
        <CardsEfeitos imagem={Efeito3} alt="Efeito 3" titulo="Antienvelhecimento" descricao="Desafie o tempo com Revera Caps! Nossa fórmula antienvelhecimento é como um escudo contra os sinais do envelhecimento, retardando os efeitos do tempo e proporcionando uma pele mais jovem e rejuvenescida." />
        <CardsEfeitos imagem={Efeito4} alt="Efeito 4" titulo="Pele mais hidratada" descricao="Desperte com uma pele incrivelmente hidratada! Revera Caps age internamente para equilibrar os níveis ideais de hidratação, deixando sua pele irresistivelmente macia, luminosa e livre do ressecamento." />
        <CardsEfeitos imagem={Efeito5} alt="Efeito 5" titulo="Efeito firmador" descricao="Experimente a sensação de firmeza como nunca antes! Graças à nanotecnologia americana exclusiva de Revera Caps, você desfrutará de um efeito firmador que redefine os contornos do seu rosto, realçando sua beleza natural." />
        <CardsEfeitos imagem={Efeito6} alt="Efeito 6" titulo="Reduz marcas e linhas de expressão" descricao="Despeça-se das marcas do tempo! Revera Caps, como um bioestimulador de colágeno, trabalha no equilíbrio ideal, proporcionando uma redução progressiva e poderosa das linhas de expressão, revelando uma pele mais suave." />
        <CardsEfeitos imagem={Efeito7} alt="Efeito 7" titulo="Ilumina a pele sem agredir" descricao="Alcance um brilho natural sem comprometer a saúde da sua pele! Com Revera Caps, tenha uma pele iluminada sem efeitos colaterais, mantendo o equilíbrio entre hidratação e luminosidade." />
        <CardsEfeitos imagem={Efeito8} alt="Efeito 8" titulo="Tecnologia que se adéqua a todos os tipos de pele" descricao="Personalização para todos! Revera Caps utiliza uma tecnologia inovadora que se adapta a todos os tipos de pele, fornecendo as doses precisas de nutrientes necessários para uma derme saudável, jovem e bonita." />
      </section>
      <Botao targetId="SecaoComprar">
        Quero Restaurar Minha Pele!
      </Botao>
      <p className={style.secao__ia__texto__satisfacao}>Compra 100% Segura e Satisfação Garantida!</p>
    </main>
  )
}
