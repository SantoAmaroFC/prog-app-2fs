import {useState} from 'react'

function ConverterTemp(e) {
    const[celsius, setCelsius] = useState = ('')
    const[fahrenheit, setFahrenheit] = useState = ('')
    
    
    function celsius(){
        setCelsius(e.target.value)
        setFahrenheit(e.target.value)
    }
    function fahrenheit (){
        setFahrenheit(e.target.value)
        setCelsius(e.target.value)

    }
    


  return (
    <div>

        <button onClick={celsius}>Calcular Celsius</button>
         <button onClick={fahrenheit}>Calcular fahrenheit</button>
          <button onClick={kelvin}>Calcular kelvin</button>
    </div>
  )
}

export default ConverterTemp