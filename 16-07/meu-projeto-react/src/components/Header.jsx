// rfce   Reac Functional Export Components

import React from 'react'
import './Header.css'

function Header() {
  return (
    <header className='header'>
        <h1 className="logo">
            Meu logo
            <nav className="nav">
                <a href="#">Home</a>
                <a href="#">Sobre</a>
                <a href="#">Contato</a>

            </nav>
        </h1>
    </header>
  )


}

export default Header