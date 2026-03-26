import {useActionState, useState} from 'react'

function Vovofilme() {
    const[valor1, setValor1] = useState(0)
    const[valor2, setValor2] = useState(0)
    let porcentagem = ((valor2 - valor1) / valor1) * 100



  return (
    <div>
        <input type='Number'
        placeholder='Digite o preço antigo'
        onChange={(e) => setValor1(Number(e.target.value))}
        />
         <input type='Number'
         placeholder='Digite o novo preço'
        onChange={(e) => setValor2(Number(e.target.value))}
        />
        <p>Porcentagem de aumento:{porcentagem}%</p>

    </div>
  )
}

export default Vovofilme