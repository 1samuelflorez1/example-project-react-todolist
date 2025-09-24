import { useState } from "react"

function CambiarTexto (){
const [btn, setBtn] = useState(true)

return(<>

    <button
    onClick={() => setBtn(!btn)} >
        {btn ? "Texto 1" : "Texto 2"}
    </button>
    <p>{btn ? "Texto 1" : "Texto 2"}</p>

</>)

}

export default CambiarTexto