
import './Notas.css'
function Notas() {
    function NotasAlunos(){
        let nota = Number(prompt("Digite a sua nota:"))

        if(nota >= 81){
            alert("Nota A")
        }else if (nota >= 60) {
            alert("Nota B")
        }else if (nota >= 40) {
            alert("Nota C")
        
        }else if (nota >= 20) {
            alert("Nota D")
        }else if (nota < 20) {
            alert("Nota E")
        }

    }
  return (
    <div className={"container-nota"}>
        <h2>Calcular notas</h2>
        <button className={"butao-nota"} onClick={NotasAlunos}>Verificar sua nota</button>
    </div>
  )
}

export default Notas