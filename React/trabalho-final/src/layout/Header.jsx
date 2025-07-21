import Botao from '../components/Botao'

import React from 'react'

function Header() {
  return (
    <header className='Header'>
        <h1>Logo</h1>

        <nav>
            <a href="#">Home</a>
        </nav>

        <nav>
            <a href="#">Sobre</a>
        </nav>

        <nav>
            <a href="#">Contato</a>
        </nav>

        <Botao texto = "Contato"/>

        

    </header>

  )
}

export default Header