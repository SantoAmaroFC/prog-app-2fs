import {useState} from 'react'

function NumerosLinhas() {
    const[numero, setNumero] = useState()
    const[inputN, setInputN] = useState('')
    function gerarPum(){
    let linhas = ''
    let pums = 0
    let i=1

        while(pums<=inputN) {
          if (i%4 != 0) {
            linhas += i + '' 
          }else{
            linhas += 'PUM' 
            pums++
            console.log(pums)
          }
          i++
        } 
          setNumero(linhas)
        }

  return (
    <div>
        <h1>Numero de linhas</h1>
        <input type='Number'
        onChange={(e) => setInputN(Number(e.target.value))}

        />

        
        
      <button onClick={gerarPum}>Pum</button>
        {numero}
    </div>
  )
}

export default NumerosLinhas