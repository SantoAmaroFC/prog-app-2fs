import './Paridade.css'

function Paridade() {
    function ParouImpar(){
        let numero = Number(prompt("Digite um numero"))

        if (numero %2 == 0) {
            alert("E par")
        }else if (numero %2 == 1) {
            alert("e impar")
        }

    }
  return (
    <div className={"container-paridade"}>
        <h2>Par ou ímpar</h2>
    <button onClick={ParouImpar}>Teste de par ou impar?</button>
        
    </div>
  )
}

export default Paridade