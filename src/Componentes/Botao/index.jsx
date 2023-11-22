import React from 'react';
import style from './botao.module.css';

export default function Botao({ children, link, targetId }) {
  const scrollToSection = (e) => {
    e.preventDefault();

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    if (link) {
      window.location.href = link;
    }

  };

  return (
    <a href={link} onClick={scrollToSection} className={style.botao}>
      {children}
    </a>
  );
    <a href="https://bit.ly/3G1v38V" className={style.botao}>{children}</a>
  )
}
