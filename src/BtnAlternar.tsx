import { useState } from "react"

function BtnAlternar () {

    const [inicioBtn, setInicioBtn] = useState(true)

    return(<>
    
        <button
        style = {{backgroundColor: inicioBtn ? "red" : "blue"}}
        onClick={() => setInicioBtn(!inicioBtn)}>
            {inicioBtn ? "red" : "blue"}
        </button>
        {inicioBtn && <p>Este texto se puede ocultar </p>}

    </>)
}
    
export default BtnAlternar