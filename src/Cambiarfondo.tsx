import { useState } from "react"

function Cambiarfondo () {

    const [color, setColor] = useState("blue")

    const cambioColor = () => {
        setColor((prevcolor) => (prevcolor === "blue" ? "red" : "blue"))
    }

    return(<>

        <div style={{
            backgroundColor: color,
            width: 100,
            height: 100,
        }}>
            <button
            onClick={cambioColor}
            >Cambiar fondo</button>
        </div>

    </>)

}

export default Cambiarfondo