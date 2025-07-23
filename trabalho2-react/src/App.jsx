import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './layout/Header'
import Banner from './layout/Banner'
import Botao from './components/Botao'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>

      <main>
        <Banner/>
      </main>
    </>
  )
}

export default App
