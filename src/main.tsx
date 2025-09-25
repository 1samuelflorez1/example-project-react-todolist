import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Counter from "./Counter.tsx"
import BtnAlternar from "./BtnAlternar.tsx"
import Btnalternar2 from "./BtnAlternar2.tsx"
import Btnmostrar from "./Btnmostrar.tsx" 
import Selector from "./Selector.tsx"
import CambiarTexto from './Cambiartexto.tsx'
import Cambiarfondo from './Cambiarfondo.tsx'
import NumeroAleatorio from './Numeroaleatorio.tsx'
import Password from './Password.tsx'
import Checkbox from './Checkbox.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Counter />
    <BtnAlternar/>
    <Btnalternar2/>
    <Btnmostrar/>
    <Selector/>
    <CambiarTexto/>
    <Cambiarfondo/>
    <NumeroAleatorio/>
    <Password/>
    <Checkbox/>
  </StrictMode>,
)
