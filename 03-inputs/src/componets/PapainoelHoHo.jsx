import {useState} from 'react'

function PapainoelHoHo() {

    const[papai, setPapai] = useState(0)

    let vezes = ""
    

    for (let i = 0; i < papai; i++) {
        vezes += "Ho"
        
    
     
    }

  return (
    <div>
        
        <h1>hoho</h1>
        <input type="Number"
        onChange={(e) => setPapai(Number(e.target.value))}

        />
            <p>Vezes {vezes}</p>
    </div>
  )
}


export default PapainoelHoHo