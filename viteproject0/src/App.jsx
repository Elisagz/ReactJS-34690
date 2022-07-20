
import './App.css'
import { useState } from 'react'
import Hooks from './components/Hooks'

export function Titulo(){
  return(
    <div>Soy el titulo</div>
  )
}

 function App() {

 const [titulo, setTitulo] = useState('Hooks')
 const [total,setTotal] = useState(0)
  const funcionModifica = ()=>{
    setTitulo("Clase de Componentes")
  }

  return (  
        <>
          <h1>Hola</h1>
          {/* <button onClick={()=>funcionModifica()}>Hola</button>

          <Navbar titulo={titulo} subtitulo={subtitulo} />
          <Novedades />
          <Error mensaje="ERROR MSG" componente={Mensaje}/> */}
          {/* <CicloVidaCC /> */}
          <Hooks />

        </>
  )
}

export default App
