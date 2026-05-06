import {useState} from 'react'
import './app.css'
import CardProduto from './components/CardProduto';

function App() {
  const[produtos, setProdutos] = useState([
    {id: 0, nome: 'Kichute', preco: 333, imagem: '👟'},
    {id: 1, nome: 'Monareta', preco: 654, imagem: '🛵'},
    {id: 2, nome: 'Tamagotchi', preco: 22, imagem: '🐥'},
    {id: 3, nome: 'Genius', preco: 100, imagem: '🛸'}
  ])

  const[inputImagem, setImpuImagem] = useState('')
  const[inputNome, setImputNome] = useState('')
  const[inputPreco, setImputPreco] = useState('')

  function cadastrar(){
    let produtoNovo =  {id: Date.now(), nome: 'Pogobal', preco: 10, imagem: '🪐'}
    setProdutos([...produtos , produtoNovo])
  }
  
  return (
    <div>
      <h1> cards de coisas</h1>
      <div className="cont-form">
      <h2>Cadastro das coisas</h2>
        <div className="input-container">
        <label htmlFor="">Imagem</label>
        <input type="text"
        value={inputImagem}
        onChange={(e) => setImpuImagem(e.target.value)}
        />
        </div>

        <div className="input-container">
        <label htmlFor="">Nome</label>
        <input type="text"
        value={inputNome}
        onChange={(e) => setImputNome(e.target.value)}
        />
        </div>

        <div className="input-container">
        <label htmlFor="">preço</label>
        <input type="text"
        value={inputPreco}
        onChange={(e) => setImputPreco(e.target.value)}
        />
        </div>

      <buttton onClick={cadastrar}>Cadastrar</buttton>
      </div>
      <div className='listaCards'>
     {
       produtos.map((produto) => (
         <CardProduto  p={produto} key={produto.id} />
       ))
     }
     </div>
    </div>
  )
}

export default App
