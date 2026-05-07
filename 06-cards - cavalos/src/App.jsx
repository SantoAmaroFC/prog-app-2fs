import {useState} from 'react'
import './App.css'
import CardProduto from './components/CardProduto';
import CardCavalos from './components/CardCavalos';
function App() {
  const [produtos, setProdutos] = useState([
    {id: 0, nome: 'Kichute', preco: 333, imagem: '👠'},
    {id: 1, nome: 'Monareta', preco: 654, imagem: '🚴'},
    {id: 2, nome: 'Tamagotchi', preco: 22, imagem: '🦕'},
    {id: 3, nome: 'Genius', preco: 100, imagem: '🛸'},
  ])

  const [cavalos, setCavalos] = useState([
    {
      id: 1,
      nome: "Trovão",
      raca: "Mangalarga Marchador",
      idade: 5,
      pelagem: "Tordilho",
      imagem: <img src="./Mangalarga Marchador.svg"></img>
    },
    {
      id: 2,
      nome: "Pérola",
      raca: "Quarto de Milha",
      idade: 4,
      pelagem: "Alazã",
      imagem: <img src="./Quarto de Milha.svg"></img>
    },
    {
      id: 3,
      nome: "Espírito",
      raca: "Mustang",
      idade: 7,
      pelagem: "Baio",
      imagem: <img src="./public/Mustang.svg"></img>
    },
    {
      id: 4,
      nome: "Apolo",
      raca: "Puro Sangue Inglês",
      idade: 6,
      pelagem: "Castanho",
      imagem: <img src="./public/Puro Sangue Inglês.svg"></img>
    },
    {
      id: 5,
      nome: "Luna",
      raca: "Appaloosa",
      idade: 3,
      pelagem: "Sardenta",
      imagem: <img src="./public/Appaloosa.svg"></img>
    },
    {
      id: 6,
      nome: "Barão",
      raca: "Crioulo",
      idade: 10,
      pelagem: "Zaino",
      imagem: <img src="./public/Crioulo.svg"></img>
    },
    {
      id: 7,
      nome: "Zéfiro",
      raca: "Lusitano",
      idade: 8,
      pelagem: "Branco",
      imagem: <img src="./public/Lusitano.svg"></img>
    },
    {
      id: 8,
      nome: "Fagulha",
      raca: "Árabe",
      idade: 5,
      pelagem: "Preto",
      imagem: <img src="./public/emojione--horse-face.svg"></img>
    },
    {
      id: 9,
      nome: "Diamante",
      raca: "Andaluz",
      idade: 9,
      pelagem: "Cinza",
      imagem: <img src="./public/Andaluz.svg"></img>
    },
    {
      id: 10,
      nome: "Cigana",
      raca: "Campolina",
      idade: 4,
      pelagem: "Pampa",
      imagem: <img src="./public/Campolina.svg"></img>
    }
  ])
  
  

  
  
  const[inputImagem, setInputImagem] = useState('')
  const[inputNome, setInputNome] = useState('')
  const[inputPreco, setInputPreco] = useState('')

  function cadastrar(){
    let produtoNovo = {
      id: Date.now(), 
      nome: inputNome, 
      preco: Number(inputPreco), 
      imagem: inputImagem
    }

    setProdutos([ ...produtos, produtoNovo])
    setInputImagem('')
    setInputNome('')
    setInputPreco('')
    
  }

  return (
    <div>
      <section>
        <h2>Cavalos</h2>
        <p>Façam aqui o map de cavalos bem bonitinhos 67</p>
      </section>

      <div className="lista-cavalos">
      {
      cavalos.map((cavalo) => (
        <CardCavalos p={cavalo} key={cavalo.id}/>
      ))
      
      }
      </div>

      <hr/>
      <h1>Cards de coisas</h1>
      <div className="cont-form">
      <h2>Cadastro de coisas</h2>
        <div className="input-container">
          <label htmlFor="">Imagem</label>
          <input type="text"
            value={inputImagem}
            onChange={(e) => setInputImagem(e.target.value)}
            />
        </div>
        <div className="input-container">
          <label htmlFor="">Nome</label>
          <input type="text"
            value={inputNome}
            onChange={(e) => setInputNome(e.target.value)}
            />
        </div>
        <div className="input-container">
          <label htmlFor="">Preço</label>
          <input type="text"
            value={inputPreco}
            onChange={(e) => setInputPreco(e.target.value)}
          />
        </div>

        <button onClick={cadastrar}>Cadastrar</button>
      </div>
      <div className="listaCards">
        {
          produtos.map((produto) => (
            <CardProduto p={produto} key={produto.id}/>
          ))

        }
      </div>
    </div>
  )
}

export default App