import {useState} from 'react'

function Celular() {
    const[mostrar, setMostrar] = useState(false)
    function CelularP(){
       setMostrar(!mostrar)
    }
    return (
        <div>
            
            <button onClick={CelularP}>Aviso</button>
            {mostrar && <p>Celulares e jogos são proibidos no laboratório. Cada vez que alguém fizer isso
                 a equipe perde um ponto na sprint corrente da SA</p>}

        </div>
    )
}

export default Celular
