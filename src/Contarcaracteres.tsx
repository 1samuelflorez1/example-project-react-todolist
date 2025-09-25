import { useState } from "react"

function Contarcaracteres(){

    const [cantidad, setCantidad] = useState("")

    function longitud (){
        setCantidad(cantidad)
    }

    return(<>
        <input
        onChange={e => (setCantidad(e.target.value))}
        ></input>
        <p>Has escrito {cantidad} caracteres</p>
    </>)
}

export default Contarcaracteres