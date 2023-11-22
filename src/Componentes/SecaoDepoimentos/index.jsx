import React from 'react'
import style from './secaodepoimentos.module.css'
import { useState } from 'react';
import { useEffect } from 'react';
import Botao from '../Botao'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination } from 'swiper/modules';
import Depoimento1 from '../../assets/images/Depoimento1.png'
import Depoimento2 from '../../assets/images/Depoimento2.png'
import Depoimento3 from '../../assets/images/Depoimento3.png'
import Depoimento4 from '../../assets/images/Depoimento4.png'
import Depoimento5 from '../../assets/images/Depoimento5.png'
import Depoimento6 from '../../assets/images/Depoimento6.png'
import Depoimento7 from '../../assets/images/Depoimento7.png'
import Depoimento8 from '../../assets/images/Depoimento8.png'
import Depoimento9 from '../../assets/images/Depoimento9.png'
import Depoimento10 from '../../assets/images/Depoimento10.png'
import Depoimento11 from '../../assets/images/Depoimento11.png'
import Depoimento12 from '../../assets/images/Depoimento12.png'
import Depoimento13 from '../../assets/images/Depoimento13.png'
import Depoimento14 from '../../assets/images/Depoimento14.png'
import Depoimento15 from '../../assets/images/Depoimento15.png'
import Depoimento16 from '../../assets/images/Depoimento16.png'

export default function SecaoDepoimentos() {

    const [SliderPerView, SetSliderPerView] = useState(2)

    const imagens = [
        { id: 1, image: Depoimento1 },
        { id: 2, image: Depoimento2 },
        { id: 3, image: Depoimento3 },
        { id: 4, image: Depoimento4 },
        { id: 5, image: Depoimento5 },
        { id: 6, image: Depoimento6 },
        { id: 7, image: Depoimento7 },
        { id: 8, image: Depoimento8 },
        { id: 9, image: Depoimento9 },
        { id: 10, image: Depoimento10 },
        { id: 11, image: Depoimento11 },
        { id: 12, image: Depoimento12 },
        { id: 13, image: Depoimento13 },
        { id: 14, image: Depoimento14 },
        { id: 15, image: Depoimento15 },
        { id: 16, image: Depoimento16 },
    ]

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 767) {
                SetSliderPerView(1)
            } else if (window.innerWidth < 1023 && window.innerWidth > 768) {
                SetSliderPerView(2)
            }
            else {
                SetSliderPerView(3)
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }

    }, [])

    return (
        <main className={style.conteudo__secao__depoimentos}>
            <h3 className={style.secao__depoimentos__titulo}>Faça o Teste Por 3 Meses e Descubra o Poder do Resveratrol, Biotina, Retinol, Ácido Hialurônico e Colágeno Verisol na Sua Pele</h3>
            <section className={style.container__slider}>
                <Swiper
                    slidesPerView={SliderPerView}
                    modules={[Navigation, Pagination]}
                    pagination
                    navigation
                >
                    {imagens.map((item) => (
                        <SwiperSlide key={item.id}>
                            <img src={item.image} alt="Imagem Swiper" className={style.slide__item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
            <Botao targetId="SecaoComprar">
                Quero Restaurar Minha Pele!
            </Botao>
            <p className={style.secao__ia__texto__satisfacao}>Compra 100% Segura e Satisfação Garantida!</p>
        </main>
    )
}
