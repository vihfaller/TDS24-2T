import React from 'react'
import './Banner.css'
import BotaoCompra from './BotaoCompra'

function Banner() {
  return (
    <div className='banner-container'>
        <div className='text-container'>
            <h5>Seja bem-vindo!</h5>
            <h1>Grande Loja Genérica</h1>
            <h3>Aqui você encontra tudo!</h3>
            <BotaoCompra/>
        </div>
    </div>
  )
}

export default Banner