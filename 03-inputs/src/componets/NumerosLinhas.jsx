import {useState} from 'react'

function NumerosLinhas() {
    const[numero, setNumero] = useState(0)

    let linhas = []

        for (let i = 1; i <= numero; i++) {
           linhas.push (<p key={i}>bom dia</p>)
            
        }

  return (
    <div>
        <h1>Numero de linhas</h1>
        <input type='Number'
        onChange={(e) => setNumero(Number(e.target.value))}
        
        />
        {linhas}
    </div>
  )
}

export default NumerosLinhas