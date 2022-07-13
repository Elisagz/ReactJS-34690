import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  // const condicion = true
  // let resultado = null

  //  if(condicion){
  //    resultado = 'El resultado es correcto'
  //  }else{
  //    resultado = 'El resultado no es correcto'
  //  }
  //`
  // console.log("voy a imprimir" + resultado)

  
  // resultado = condicion ? "El resultado es correcto" :"El resultado no es correcto"
  // console.log(`Voy a imprimir: ${resultado}`)

  //formas de usar operadores
  //condicion ? si : no,
  // condicion && ,
  // condicion ||

  //sugar sintax
  // console.log(`Voy a imprimir: ${condicion ? "El resultado es correcto" :"El resultado no es correcto"}`)
  // console.log(`Voy a imprimir: ${resultado}`)

  //campos dinamicos
  // let id ='1'
  // const objeto ={
  //   nombre: "Leo",
  //   apellido: 'Hernandez',
  //   ['clienteid_'+id]: 'know78dhwe87e'
  // }
  // console.log(objeto)

  //destructuring 
  // const {nombre:name} = objeto
  // console.log(name)

  // asignacion en destructuracion
  // const {nombre:name, edad=7} = objeto
  // console.log(edad)
  
  return (
    <>
        <div className="App" style={{paddingTop:10}}>
          <div>Hola</div>
          <img src=""/> 
        </div>

        <div>
          <label htmlFor="">Hola otra vez</label>
        </div>
    </>
  )
}

export default App
