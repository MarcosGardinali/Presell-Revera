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
        <CardsEfeitos imagem={Efeito1} alt="Efeito 1" titulo="Uniformiza o tom da pele" descricao="A fórmula pensada por especialistas garante uma pele mais jovem e uniforme, eliminando manchas causadas por ações adversas." />
        <CardsEfeitos imagem={Efeito2} alt="Efeito 2" titulo="Trata a acne e desobstrui os poros" descricao="De dentro para fora, Revera Caps equilibra a oleosidade da pele e age diretamente nos poros, evitando acúmulo de impurezas. O resultado? Uma pele mais saudável e viçosa." />
        <CardsEfeitos imagem={Efeito3} alt="Efeito 3" titulo="Antienvelhecimento" descricao="Retarda o envelhecimento da derme e trata os efeitos do tempo, contribuindo para uma pele mais rejuvenescida." />
        <CardsEfeitos imagem={Efeito4} alt="Efeito 4" titulo="Pele mais hidratada" descricao="Todas as peles devem ser hidratadas, principalmente, as oleosas. Revera Caps age internamente para equilibrar os níveis de hidratação ideal da sua derme, tornando-a mais macia e luminosa." />
        <CardsEfeitos imagem={Efeito5} alt="Efeito 5" titulo="Efeito firmador" descricao="A nanotecnologia americana exclusiva de Revera Caps revela o colágeno poderoso ao mercado, promovendo efeito firmador nunca visto antes." />
        <CardsEfeitos imagem={Efeito6} alt="Efeito 6" titulo="Reduz marcas e linhas de expressão" descricao="Sendo um bioestimulador de colágeno, Revera Caps trabalha no seu organismo equilibrando as doses ideais do ativo, fazendo a redução progressiva e poderosa das marcas e linhas de expressões." />
        <CardsEfeitos imagem={Efeito7} alt="Efeito 7" titulo="Ilumina a pele sem agredir" descricao="Tenha uma pele iluminada naturalmente, sem sofrer com os efeitos colaterais, como o excesso de oleosidade ou ressecamento severo." />
        <CardsEfeitos imagem={Efeito8} alt="Efeito 8" titulo="Tecnologia que se adéqua a todos os tipos de pele" descricao="Revera Caps tem tecnologia capaz de se adequar a todos os tipos de pele, oferecendo exatamente as doses dos nutrientes necessários para uma derme mais saudável, jovem e bonita." />
      </section>
      <Botao targetId="SecaoComprar">
        Quero Restaurar Minha Pele!
      </Botao>
      <p className={style.secao__ia__texto__satisfacao}>Compra 100% Segura e Satisfação Garantida!</p>
    </main>
  )
}
