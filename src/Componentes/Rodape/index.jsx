import React from 'react'
import style from './rodape.module.css'
import logoroxo from '../../assets/images/logoroxo.png'
import cartoes from '../../assets/images/cartoes.png'
import siteseguro from '../../assets/images/siteseguro.png'

export default function Rodape() {
    return (
        <footer className={style.rodape}>
            <section className={style.container__selos}>
                <img src={logoroxo} alt='Imagem Logo' className={style.imagem__logo__rodape} />
                <section className={style.selos__rodape}>
                    <h3>Formas de Pagamento</h3>
                    <img src={cartoes} alt='Imagem Cartões' className={style.imagem__selos} />
                </section>
                <section className={style.selos__rodape}>
                    <h3>Site 100% Seguro</h3>
                    <img src={siteseguro} alt='Imagem Site Seguro' className={style.imagem__selos} />
                </section>
            </section>
            <p className={style.rodape__texto}>2023 ©Copyright © Revera Caps. Todos os direitos reservados. Todo o conteúdo do site, todas as fotos, imagens, logotipos, marcas, layout, aqui veículados são de propriedade exclusiva do Revera Caps. É vedada qualquer reprodução, total ou parcial, de qualquer elemento de identidade, sem expressa autorização. A violação de qualquer direito mencionado implicará na responsabilização cível e criminal nos termos da Lei. Informamos que Revera Caps é para uso diário. Seu resultado pode variar de pessoa para pessoa. Os preços dos produtos estão sujeitos a alteração sem aviso prévio. "Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site."</p>
        </footer>
    )
}
