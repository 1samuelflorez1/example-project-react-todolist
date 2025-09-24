// ---------------------------------------------------ejemplo de useEffect 1---------------------------------------------- 

import { useEffect, useState } from "react"

function Counter () {

  const [newNumber, setNewNumber] = useState(0)

  useEffect(() => {
    document.title = `contador: ${newNumber}`
  }, [newNumber])

  function aumentar () {
    setNewNumber(newNumber + 1)
  }

  function disminuir () {
    if(newNumber > 0){
    setNewNumber(newNumber - 1)
    }
  }

  return (<>

    <div>
      <h1>Ejercicio: UseEffect</h1>
      <p>valor: {newNumber}</p>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={disminuir}>Disminuir</button>
    </div>

  </>)
}
export default Counter

