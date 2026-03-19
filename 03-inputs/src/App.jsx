import { useState } from 'react'
import './App.css'
import Celular from './componets/Celular';
import BombaPneu from './componets/BombaPneu';
import PapainoelHoHo from './componets/PapainoelHoHo';
import AprovadoeReprovado from './componets/AprovadoeReprovado';
import Bomdinho from './componets/Bomdinho';
import NumerosLinhas from './componets/NumerosLinhas';
import PostoCombustivel from './componets/PostoCombustivel';
import Lesma from './componets/Lesma';
import Vovofilme from './componets/Vovofilme';
import ConverterTemp from './componets/ConverterTemp';
import ConversorMoedas from './componets/ConversorMoedas';




function App() {
  const[inputNome, setInputNome] = useState('')
  function cadastrar(){
    console.log("cadastrando:" + inputNome)

  }

  return (
    <>
      <h1><h1>Exercícios para praticar inputs</h1></h1>
     <h1>inputs controlados</h1>
     Nome <input type="text"
     value={inputNome}
     onChange={(e) => setInputNome (e.target.value)}
     />
     

    <button onClick={cadastrar}>Cadastrar</button>

    <hr/>
        <h1>Exercícios para praticar inputs</h1>
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
      <hr/>
      <Lesma />
      <hr/>
      <Vovofilme />
      <hr/>
      <hr/>
      
      <h1>Mini exercícios simples para praticar facinho</h1>
      <ConverterTemp />
      <hr/>
      <ConversorMoedas />
    </>

  )
}

export default App
