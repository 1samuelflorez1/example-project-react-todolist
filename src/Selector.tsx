import { useState } from "react"

function Selector () {
const[letra, setLetra] = useState("A")

return(<div>

    <select value={letra} onChange={e => setLetra(e.target.value)}>
        <option value="A">Opcion A</option>
        <option value="B">Opcion B</option>
        <option value="C">Opcion C</option>
    </select>
    <p>Opcion seleccionada {letra}</p>

</div>)

}

export default Selector