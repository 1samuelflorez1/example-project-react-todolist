import { useState } from "react"

function Password (){

    const [btn, setBtn] = useState(true)

    return(<>
        <button
        onClick={() => setBtn(!btn)}
        >{btn ? "Mostrar Contraseña" : "Ocultar contraseña"}</button>
        <input type={btn ? "password" : "text"} value={"contraseña"}></input>
    </>)
}

export default Password