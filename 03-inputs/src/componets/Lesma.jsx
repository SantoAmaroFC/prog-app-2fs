import {useState} from 'react'

function Lesma() {
    const[Lesmaa, setLesmaa] = useState('')
    let resultado
        if (Lesmaa < 10 ) {
            resultado = "Nivel 1"
        }else if (Lesmaa >=10 && Lesmaa <= 20){
            resultado = "Nivel 2"
        }else if (Lesmaa >= 20){
            resultado = "Nivel 3"
        }

  return (
    <div>
        <h1>Lesma</h1>
        <input type='text'
        onChange={(e) => setLesmaa(Number(e.target.value)) }
        />

        <p>Resultado:{resultado}</p>
    </div>
  )
}

export default Lesma