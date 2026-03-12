import { useState } from 'react'
import './App.css'
import Celular from './componets/Celular';



function App() {
  const[inputNome, setInputNome] = useState('')
  function cadastrar(){
    console.log("cadastrando:" + inputNome)

  }

  return (
    <>
     <h1>inputs controlados</h1>
     Nome <input type="text"
     value={inputNome}
     onChange={(e) => setInputNome (e.target.value)}
     />
     

    <button onClick={cadastrar}>Cadastrar</button>

    <hr/>
      <Celular />
      <hr/>
   
    </>
  )
}

export default App
