import React from 'react'

function CardCavalos(prop) {
    return (
        <div className='cont-card-cavalo'>      
             <p className='imagemCavalo'>{prop.p.imagem}</p>    
            <h2>Nome: {prop.p.nome}</h2>
            <p>Raça: {prop.p.raca}</p>
            <p>Idade: {prop.p.idade}</p>
            <p>Pelagem: {prop.p.pelagem}</p>
            
        </div>
    )
}

export default CardCavalos
