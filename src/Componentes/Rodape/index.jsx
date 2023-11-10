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
        </footer>
    )
}
