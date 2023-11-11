import React from 'react'
import style from './botao.module.css'

export default function Botao({children}) {
  return (
    <a href="https://bit.ly/3G1v38V" className={style.botao}>{children}</a>
  )
}
