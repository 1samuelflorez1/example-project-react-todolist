import { useState } from "react"

function Btnmostrar () {
const [btnVisible, setBtnVisible] = useState(true)
    
    return (<>
    
        <button
        className="rounded-4x1"
        style={{backgroundColor: btnVisible ? "white" : "gray"}}
        onClick={() => setBtnVisible(!btnVisible)}>
            {btnVisible ? "Texto Visible" : "Texto Oculto"}
        </button>
        {btnVisible && <p>Texto secreto</p>}
    </>
    )
 
}

export default Btnmostrar