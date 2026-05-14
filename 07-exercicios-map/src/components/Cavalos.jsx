import React from 'react'
import './Cavalos.css'

function Cavalos(cavaloss) {
    return (
        <div className="atv-cavalos">
            <h2>{cavaloss.ca.nome}</h2>
            <h2>{cavaloss.ca.idade}</h2>
            <p>{cavaloss.ca.raca}</p>
            <p>{cavaloss.ca.pelagem}</p>
        </div>
    )
}

export default Cavalos
