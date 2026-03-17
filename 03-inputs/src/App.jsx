import { useState } from 'react'
import './App.css'
import Celular from './componets/Celular';
import BombaPneu from './componets/BombaPneu';
import PapainoelHoHo from './componets/PapainoelHoHo';
import AprovadoeReprovado from './componets/AprovadoeReprovado';
import Bomdinho from './componets/Bomdinho';
import NumerosLinhas from './componets/NumerosLinhas';
import PostoCombustivel from './componets/PostoCombustivel';
// import ConverterTemp from './componets/ConverterTemp';



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
      <BombaPneu />
      <hr/>
      <PapainoelHoHo />
      <hr/>
      <AprovadoeReprovado />
      <hr/>
      <Bomdinho />
      <hr/>
      <NumerosLinhas />
      <hr/>
      <PostoCombustivel />
    </>
  )
}

export default App
