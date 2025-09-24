import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Counter from "./Counter.tsx"
import BtnAlternar from "./BtnAlternar.tsx"
import Btnalternar2 from "./BtnAlternar2.tsx"
import Btnmostrar from "./Btnmostrar.tsx" 
import Selector from "./Selector.tsx"
import CambiarTexto from './Cambiartexto.tsx'
import Cambiarfondo from './Cambiarfondo.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Counter />
    <BtnAlternar/>
    <Btnalternar2/>
    <Btnmostrar/>
    <Selector/>
    <CambiarTexto/>
    <Cambiarfondo/>
  </StrictMode>,
)
