import { useState } from "react"

function NumeroAleatorio (){

    const [numero, setNumero] = useState(0)
    const numeroRandom = Math.floor(Math.random() * 1000) + 1
    
    return (<>
    
        <button
        style={{marginTop: 20}}
        onClick={() => setNumero(numeroRandom)}
        >Numero Aleatorio</button>
        <p>El numero aleatorio es: {numero}</p>

    </>)
}

export default NumeroAleatorio