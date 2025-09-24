import { useState } from "react"

function Btnalternar2 (){

    const [colorBtn, setColorBtn] = useState(true)

    return(<>
    <button
    style = {{backgroundColor: colorBtn ? "white" : "gray"}}
    onClick={() => setColorBtn(!colorBtn)}>Presioname</button>  
    </>)
}

export default Btnalternar2