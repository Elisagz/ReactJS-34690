
import react2 from './react2.jpeg'
import './App.css'
import Navbar from './components/Navbar'
import Novedades from './components/Novedades'
import Error from './components/Error'
import Mensaje from './components/Mensaje'

export function Titulo(){
  return(
    <div>Soy el titulo</div>
  )
}

 function App() {
  // `
  let open = true
  const suma=()=>{
    console.log("estoy sumando")
  }
  if(open){
    console.log("esta abierto")

  }else{
    console.log("esta cerrado")

  } 
  //<Navbar /> === Navbar()
  // <Navbar titulo ="nombredemiproyecto"/> == Navbar('nombredemiproyecto')
  let subtitulo="Componentes"
  return (  
        <>
       {/* {open ?"esta open":"no esta open"} */}
          <div className="App" style={{paddingTop:10}}>
              <h1>Hola</h1>
              {/* <div>Saludos </div> */}
              {/* <button onClick={suma} >Clickeame</button> */}
              {/* <img src={react2} alt="" /> */}
              <input />
          </div>
          <h1>Hola</h1>
          <Navbar titulo="nombreProyecto" subtitulo={subtitulo} />
          <Novedades />
          <Error>
             <Mensaje />
            </Error>


        </>
  )
}

export default App
