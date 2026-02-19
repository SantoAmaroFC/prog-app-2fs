 
function DiaDaSemana() {
function verificarDia(){
    let dia = prompt("Digite o dia da semana (1 a 7)")
    dia = Number(dia)

    // if(dia == 1){
    //     alert("Domingo")
    // }else if(dia == 2){
    //     alert("Segunda")
    // }else if (dia == 3) {
    //     alert("Terça")
    // }else if (dia == 4) {
    //     alert("Quarta")
    // }else if (dia == 5) {
    //     alert("Quinta")
    // }else if (dia == 6) {
    //     alert("Sexta")
    // }else if (dia == 7){
    //     alert("Sabado")
    // }else{
    //     alert("Esse dia não existe ou é carnaval")
    // }


    switch(dia){
            case 1: alert("Domingo")
            break
            case 2: alert("segunda")
            break
            case 3: alert("terça")
            break
            case 4: alert("quarta")
            break
            case 5: alert("quinta")
            break
            case 6: alert("sexta")
            break
            case 7: alert("sabado")
            break
            default:alert("Esse dia não existe ou é carnaval")
    }
}


  return (
    <div>
        <h2>Dia da semana</h2>
        <button onClick={verificarDia}>Verificar dia</button>
    </div>
  )
}

export default DiaDaSemana