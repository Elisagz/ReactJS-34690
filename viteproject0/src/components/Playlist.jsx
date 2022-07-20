import  Titulo  from "./Titulo"


const Playlist = ({playlist, songs}) => {
  
  console.log(songs)
  return (
    <div style={{background:"red"}}>
        {/* <h1>{titulo}</h1> */}
        <Titulo titulo={playlist.titulo} />
        <p>{playlist.descripcion}</p>
        <p>{playlist.autor}</p>
        {songs.map((item,i)=><li key={i}>{item}</li>)}
        {/* <button onClick={saludo}>Saludar</button> */}
    </div>
  )
}

export default Playlist