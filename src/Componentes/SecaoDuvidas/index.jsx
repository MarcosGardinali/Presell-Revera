import React, { useState } from 'react'
import style from './secaoduvidas.module.css'

export default function SecaoDuvidas() {

    const [seguro, setSeguro] = useState(false);
    const [utilizar, setUtilizar] = useState(false);
    const [anvisa, setAnvisa] = useState(false);
    const [comprar, setComprar] = useState(false);
    const [tempo, setTempo] = useState(false);
    const [garantia, setGarantia] = useState(false);

    const toggleSeguro = () => {
        setSeguro(!seguro);
    };

    const toggleUtilizar = () => {
        setUtilizar(!utilizar);
    };

    const toggleAnvisa = () => {
        setAnvisa(!anvisa);
    };

    const toggleComprar = () => {
        setComprar(!comprar);
    };

    const toggleTempo = () => {
        setTempo(!tempo);
    };

    const toggleGarantia = () => {
        setGarantia(!garantia);
    };

    return (
        <main className={style.conteudo__secao__duvidas}>
            <h2>Dúvidas Frequentes</h2>
            <section className={style.container__duvidas}>
                <section className={style.duvidas} onClick={toggleSeguro}>
                    <h3 className={style.duvidas__titulo}>Revera Caps é seguro?</h3>
                    {seguro && (
                        <div className={style.duvidas__textos} dangerouslySetInnerHTML={{
                            __html: `
                        <p><span style="color: rgb(68, 68, 68);">Totalmente seguro, sem nenhuma contraindicação ou efeito colateral. No entanto, você não deve interromper o uso de remédios sem a autorização médica.
                        <br>
                        <br>
                        Ele não é recomendado apenas para gestantes, lactantes e crianças."</p>
                    ` }} />
                    )}
                </section>

                <section className={style.duvidas} onClick={toggleUtilizar}>
                    <h3 className={style.duvidas__titulo}>Como devo utilizar o Revera Caps?</h3>
                    {utilizar && (
                        <div className={style.duvidas__textos} dangerouslySetInnerHTML={{
                            __html: `
                    <p><span style="color: rgb(68, 68, 68);">Tudo o que você precisará fazer é usar Revera Caps 2x ao dia. Sendo 1 cápsula pela manhã e 1 cápsula à tarde ou se preferir a noite, esta formula é ultra concentrada!."</p>
                    ` }} />
                    )}
                </section>

                <section className={style.duvidas} onClick={toggleAnvisa}>
                    <h3 className={style.duvidas__titulo}>Revera Caps é aprovado pela Anvisa?</h3>
                    {anvisa && (
                        <div className={style.duvidas__textos} dangerouslySetInnerHTML={{
                            __html: `
                    <p><span style="color: rgb(68, 68, 68);">Os produtos naturais da fórmula são isentos de registro conforme MS-RDC 240/18."</p>
                    ` }} />
                    )}
                </section>

                <section className={style.duvidas} onClick={toggleComprar}>
                    <h3 className={style.duvidas__titulo}>Como posso comprar o Revera Caps?</h3>
                    {comprar && (
                        <div className={style.duvidas__textos} dangerouslySetInnerHTML={{
                            __html: `
                    <p><span style="color: rgb(68, 68, 68);">Basta escolher o kit que mais combina com você. Revera Caps pode ser pago a vista, no Pix, através de boleto bancário, ou através de cartão de crédito parcelado em até 12x. O kit de 10 potes pode ser parcelado em 3x sem juros."</p>
                    ` }} />
                    )}
                </section>

                <section className={style.duvidas} onClick={toggleTempo}>
                    <h3 className={style.duvidas__titulo}>Quanto tempo para o Revera Caps fazer efeito?</h3>
                    {tempo && (
                        <div className={style.duvidas__textos} dangerouslySetInnerHTML={{
                            __html: `
                    <p><span style="color: rgb(68, 68, 68);">É recomendando o uso por 3 meses consecutivos para obter os melhores resultados. No entanto, há relato de pessoas que já sentem uma boa diferença entre a 2 e 4 semanas."</p>
                    ` }} />
                    )}
                </section>

                <section className={style.duvidas} onClick={toggleGarantia}>
                    <h3 className={style.duvidas__titulo}>Como funciona a garantia de 90 dias?</h3>
                    {garantia && (
                        <div className={style.duvidas__textos} dangerouslySetInnerHTML={{
                            __html: `
                    <p><span style="color: rgb(68, 68, 68);">
                        – Tome 2 cápsulas por dia durante 90 dias (não ultrapasse a data limite para reembolso);
                        <br>
                        <br>
                        – Beba água em abundância durante o tratamento e mantenha uma boa alimentação;
                        <br>
                        <br>
                        – Tire fotos do rosto com boa iluminação. Semblante sério e sorrindo, de frente e de lado;
                        <br>
                        <br>
                        – Envie fotos dos potes vazios;
                        <br>
                        <br>
                        – Após 3 meses, envie todas as fotos de antes (print da galeria, mostrando a data da foto);
                        <br>
                        <br>
                        – Tire fotos atuais iguais as fotos de antes;
                        <br>
                        <br>
                        – Monte um relatório explicando o motivo do reembolso, envie o código de venda e as fotos para o e-mail reveracapsoficial@gmail.com;
                        <br>
                        <br>
                        – Aguarde o retorno;
                    "</p>
                    ` }} />
                    )}
                </section>
            </section>
        </main>
    )
}
