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

  function cadastrar(){
    let produtoNovo =  {id: Date.now(), nome: 'Pogobal', preco: 10, imagem: '🪐'}
    setProdutos([...produtos , produtoNovo])
  }
  
  return (
    <div>
      <h1> cards de coisas</h1>
      <buttton onClick={cadastrar}>+</buttton>
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
