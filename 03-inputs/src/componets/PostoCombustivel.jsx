import {useState} from 'react'

function PostoCombustivel() {
    const[gasolina, setGasolina] = useState ('')
    const[mensagem, setmensagem] = useState ('')
    
    const opcao = (valor) => {
        switch(valor) {
            case 1:
            setmensagem("Alcool")
            break
            case 2:
            setmensagem("Gasolina")
            break
            case 3:
            setmensagem("Diesel")
            break
            case 4:
            setmensagem("Muito Obrigado")
            break
            default:
              setmensagem("Muito Obrigado")
              break
            

        }
    }
        
  return (
    <div>

        <h1>Posto</h1>

        <input type='text' value={gasolina}
       onChange={(e) => {
         const valor = Number(e.target.value)
         setGasolina(valor)
         opcao(valor)
        }} 
        />

        <p>{mensagem}</p>

    </div>
  )
}

export default PostoCombustivel