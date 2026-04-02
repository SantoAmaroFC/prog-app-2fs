import { useState } from 'react'

import './App.css'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import Contato from './pages/Contato'

function App() {
 const[tela, setTela] = useState(<Home />)

  return (
   <div className="cont-app">
    <header className={'cont-header'}>
      <nav>
      <button className={'botoes-nav'} onClick={() => setTela(<Home />)}>Home</button>
      <button className={'botoes-nav'} onClick={() => setTela(<Contato />)}>Contato</button>
      <button className={'botoes-nav'} onClick={() => setTela(<Produtos />)}>Produtos</button>
      </nav>
      </header>
    <main className={'cont-main'}>
    {tela}
      </main> clasName={'botoes-nav'}
   </div>
  )
}

export default App
