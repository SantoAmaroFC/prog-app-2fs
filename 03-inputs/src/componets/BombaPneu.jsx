import {useState} from 'react'

function BombaPneu() {
    const[BombaN, setBombaN] = useState('')
    const[BombaM, setBombaM] = useState('')

    
    const Diferença = BombaN - BombaM

  
    
  return (
    <div>
        <h1>Calibragem do pneu</h1>

      <input type="Number"
        onChange= {(e) => setBombaN(Number(e.target.value))}
      
      />

      <input type="Number"
        onChange= {(e) => setBombaM(Number(e.target.value))}
      
      
      />
      <p>Diferença {Diferença}</p>

    </div>
  )
}

export default BombaPneu