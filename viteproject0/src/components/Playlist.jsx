import  Titulo  from "./Titulo"


const Playlist = ({titulo, descripcion, saludo}) => {
  return (
    <div style={{background:"red"}}>
        {/* <h1>{titulo}</h1> */}
        <Titulo titulo={titulo} />
        <p>{descripcion}</p>
        <button onClick={saludo}>Saludar</button>
    </div>
  )
}

export default Playlist