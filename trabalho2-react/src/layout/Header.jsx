import React from 'react'
import './Header.css'
import Botao from '../components/Botao'

function Header() {
    return (

        <header className='Header'>
            <section className="logo">
                <img src=".\src\assets\img\logoAltair.png" alt="logo" />
            </section>

            <nav className="menu">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">TOURS</a></li>
                    <li><a href="#">PAGES</a></li>
                    <li><a href="#">BLOG</a></li>
                    <li><a href="#">SHORTCODES</a></li>
                    <li><a href="#">SHOP</a></li>
                </ul>
            </nav>
        
        <div>
           <Botao/>
        </div>

        </header>

        



    )
}

export default Header