import {useState} from 'react'

function ConverterTemp() {
    const[celsius, setCelsius] = useState('')
    const[fahrenheit, setFahrenheit] = useState('')

       function handleCelsius(value) {
    setCelsius(value);
    setFahrenheit(value !== ""? ((parseFloat(value) * 9) / 5 + 32).toFixed(2): "");
  }
        function handleFahrenheit(value) {
    setFahrenheit(value);
    setCelsius(value !== "" ? (((parseFloat(value) - 32) * 5) / 9).toFixed(2) : "");
  }

   
    
    
    
    
    
    return (
      <div>

        <h1>Celcius para Fahrenhait</h1>
        <input type='text'
        placeholder='Digite a temperatura celcius'
        value={celsius}
          onChange={(e) =>  handleCelsius(Number(e.target.value))}
        />
        <h1>fahrenhait para Celcius</h1>
        <input type='text'
        placeholder='Digite a temperatura Fahrenheitt'
        value={fahrenheit}
          onChange={(e) => handleFahrenheit(Number(e.target.value))}
        />

    </div>
  )
}
  

export default ConverterTemp