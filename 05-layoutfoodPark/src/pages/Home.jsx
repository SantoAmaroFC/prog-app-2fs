import './Paginas.css'

function Home() {
  return (
    <div className={'cont-home '}>
      <section className='esquerda'>
        <h1 className={'titulo glass-effect' }>Bem-vindo ao nosso foodtruck, onde o sabor não tem limites! 🚚🔥</h1>
    <p className={ 'paragrafo_1 glass-effect'} >Aqui você encontra o melhor da comida de rua em um só lugar:
      carnes suculentas direto da brasa, pastéis crocantes recheados na hora e pizzas irresistíveis com aquele toque especial.</p>

    <p className={'paragrafo_1 glass-effect'}>Nossa missão é simples: entregar qualidade, sabor e uma experiência única a cada mordida.
 Seja para matar a fome ou reunir os amigos, temos a opção perfeita pra você.</p>

<div className={'menu glass-effect'}>
        <span>🥩 Churrasco</span>
        <span>🥟 Pastel</span>
        <span>🍕 Pizza</span>
      </div>

<p className={'frase glass-effect'}>
        Porque aqui, cada parada é uma nova experiência de sabor!
      </p>
      </section>
      <section className='direita'>
      <img src="./public/propaganda.png" className='imagempro' ></img>
      </section>

   

    </div>
  )
}

export default Home