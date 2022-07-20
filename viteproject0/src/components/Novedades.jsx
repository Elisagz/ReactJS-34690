import Playlist from "./Playlist"

const Novedades = () => {
  
    const saludar = () =>{
    console.log("Hola soy la funcion saludar, definida en Novedades y ejecutada desde Playlist")
  }
  
  let playlist = {
    titulo: "This is Coldplay",
    autor: "usex",
    descripcion:"Canciones mas sonadas"
  }
  let songs=["Viva la vida","Gravity","Coloratura"]

  return (
    <>
    <div>Esta es una seccion de novedades</div>
    {/* <Playlist titulo ="Un verano sin ti" descripcion ="Este es una playlist del 2022" saludo={saludar}/> */}
    <Playlist playlist = {playlist} songs={songs}/> 
  
    </>
  )
}

export default Novedades