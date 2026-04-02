import { useState } from 'react'

import './App.css'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import Contato from './pages/Contato'
import Churascaria from './pages/Churascaria'

function App() {
 const[tela, setTela] = useState(<Home />)

  return (
   <div className="cont-app">
    <header className={'cont-header'}>
      <nav>
      <button className={'botoes-nav'} onClick={() => setTela(<Home />)}>Home</button>
      <button className={'botoes-nav'} onClick={() => setTela(<Contato />)}>Churrascaria do Gaúcho</button>
      <button className={'botoes-nav'} onClick={() => setTela(<Produtos />)}>Casa de Pastel</button>
      <button className={'botoes-nav'} onClick={() => setTela(<Churascaria />)}>Pizza Ruth</button>
      </nav>
      </header>
    <main className={'cont-main'}>
    {tela}
      </main> 
   </div>
  )
}

export default App
