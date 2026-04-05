import './Paginas.css'

function Home() {
  return (
    <div className={'cont-home'}>

    <h1>Bem-vindo ao nosso foodtruck, onde o sabor não tem limites! 🚚🔥</h1>
    <p>Aqui você encontra o melhor da comida de rua em um só lugar:
      carnes suculentas direto da brasa, pastéis crocantes recheados na hora e pizzas irresistíveis com aquele toque especial.</p>

    <p>Nossa missão é simples: entregar qualidade, sabor e uma experiência única a cada mordida.
 Seja para matar a fome ou reunir os amigos, temos a opção perfeita pra você.</p>

<div className="menu">
        <span>🥩 Churrasco</span>
        <span>🥟 Pastel</span>
        <span>🍕 Pizza</span>
      </div>

<p className="frase">
        Porque aqui, cada parada é uma nova experiência de sabor!
      </p>

    </div>
  )
}

export default Home