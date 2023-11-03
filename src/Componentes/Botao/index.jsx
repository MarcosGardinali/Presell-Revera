import React from 'react'
import style from './botao.module.css'

export default function Botao({children}) {
  return (
    <a href="https://bit.ly/461eHIf" className={style.botao}>{children}</a>
  )
}
