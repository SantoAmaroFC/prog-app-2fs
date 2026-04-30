import './CardProdutos.css'

function CardProduto(prop) {
    return (
        <div className="cont-card">
            {console.log(prop.p.nome)}
            <p className='imagemProduto'>{prop.p.imagem}</p>
            <h2>{prop.p.nome}</h2>
            <p>R${prop.p.preco.toFixed(2).replace('.', ',')}</p>
            {/* <p>R${prop.p.preco.toFixed(2)}</p> */}
        </div>
    )
}

export default CardProduto
