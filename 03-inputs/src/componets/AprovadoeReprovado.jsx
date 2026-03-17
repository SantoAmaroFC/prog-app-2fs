import {useState} from 'react'

function AprovadoeReprovado() {
    const[notas, setNotas] = useState(0)
    let resultado = ""

    if (notas >= 7) {
        resultado = "aprovado"
    }else if (notas >= 4 ){
        resultado = "recuperação"
    }else if(notas <= 3){
        resultado = "reprovado"
    }



  return (
    <div>

        <h1>Detector de notas</h1>
        <input type="Number"
            onChange={(e) => setNotas(Number(e.target.value))}
        
        />
       
    <p>Resultado:{resultado}</p>
    </div>
  )
}

export default AprovadoeReprovado