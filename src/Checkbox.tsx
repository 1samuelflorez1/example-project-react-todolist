import { useState } from "react"

function Checkbox () {
    const [ischeckbox, setisCheckBox] = useState(false)

    function alertOne (){
        if(ischeckbox === false){
            setisCheckBox(ischeckbox)
            alert("El modo oscuro esta activado")
        }else{
            setisCheckBox(!ischeckbox)
            alert("El modo oscuro esta desactivado")
        }
    }

    return (<>
        <input
        checked={ischeckbox}
        onClick={alertOne}
        onChange={e => {setisCheckBox(e.target.checked)}} 
        type="checkbox"
        ></input>
    </>)
}

export default Checkbox