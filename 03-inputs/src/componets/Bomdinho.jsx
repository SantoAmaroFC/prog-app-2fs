import {useState} from 'react'

function Bomdinho() {
    const[alunos, setAlunos] = useState(0)
    const[monitores, setMonitores] = useState(0)

    let soma = alunos + monitores
    let resultado = ''

    if(soma > 50){
        resultado = "N"
    }else if(soma <50){
        resultado = "S"
    }


        

  return (
    <div>
            <h1>Bondinho</h1>
    <input type='Number'
        onChange={(e) => setAlunos(Number(e.target.value)) }
    
    />
    <input type='Number'
        onChange={(e) => setMonitores(Number(e.target.value))}


    />
        <p>Resposta: {resultado}</p>
    </div>
  )
}

export default Bomdinho