

function Tabuada() {

  function contas(){

    let nome = Number(prompt("Digite um numero"))
    let calcula = ""

    for (let i = 1; i <= 10; i++) {
      // calcula += nome * i + "\n"
      calcula += `${nome} x ${i} = ${nome * i} \n`

    }
    alert(calcula)
  }
  return (

    <div>
        
         <button  onClick={contas}>tabuada</button>  
            
    </div>
  )
}

export default Tabuada