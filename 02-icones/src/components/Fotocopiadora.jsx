

function Fotocopiadora() {
    function copias(){

    // let copias = Number(prompt("de 1 a 500"))  
    let preço = 0.33  
    let calcula = ''

    for (let i = 1; i <= 500; i++) {
      // calcula += (preço * i).toFixed(2) + "\n"
      calcula += `  ${(preço * i).toFixed(2)} \n`
      
    }
    alert(calcula)

    }
  return (
    <div>
        
        <button  onClick={copias}>numero de copias</button>
        
    </div>
  )
}

export default Fotocopiadora