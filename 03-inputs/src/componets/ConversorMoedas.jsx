import {useState} from 'react'

function ConversorMoedas() {
    const[real, setReal] = useState('')
    const[dolar, setDolar] = useState('')

    const cotacao = 5
    let resultado = 0

        function converorreal(value) {
           setReal(value)
           if (value !== "") {
            resultado =(parseFloat(value) / cotacao).toFixed(2)
            setDolar(resultado)
           }else {
            setDolar("")
           }
         
        }

  return (
    <div>

        <input type='Number'
        onChange={(e) => converorreal(Number(e.target.value))}
        />
        {resultado}

    </div>
  )
}

export default ConversorMoedas