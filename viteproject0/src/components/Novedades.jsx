import Playlist from "./Playlist"

const Novedades = () => {
  
    const saludar= () =>{
    console.log("Hola soy la funcion saludar, definida en Novedades y ejecutada desde Playlist")
  }

  return (
    <>
    <div>Esta es una seccion de novedades</div>
    <Playlist titulo ="Un verano sin ti" descripcion ="Este es una playlist del 2022" saludo={saludar}/>
    {/* <Playlist titulo ="playlist2" descripcion ="Este es una playlist del 2022"/>
    <Playlist titulo ="playlist3" descripcion ="Este es una playlist del 2024"/>
    <Playlist titulo ="playlist4" descripcion ="Este es una playlist del 2020"/> */}
    </>
  )
}

export default Novedades