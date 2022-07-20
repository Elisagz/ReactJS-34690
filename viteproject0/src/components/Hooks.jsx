
import { useState,  useEffect } from 'react'

const Hooks = () => {
    const [count,setCount]= useState(0)
    const [name, setName] = useState('Coder')

    //despues de que la app se monto y una unica vez === componentdidmount()
    useEffect(()=>{
        console.log("hola desde el useeffect []")
    },[])

    // se va ejecutar cuando cambie count y al inicio del render === componetdidUpdate
    useEffect(()=>{
        console.log("hola desde el useeffect [count]")

        return () =>{
            console.log("Clean up de useeffect [count]")
        }
        // setCount(count+1)
    },[count])

    // al inicio del render y siempre en cada render
    useEffect(()=>{
        console.log("hola desde el useeffect sin restricciones")
        return () =>{
            console.log("Clean up de useeffect sin restricciones")
        }
    })

    // al inicio del render y cuando cambie count o name
    useEffect(()=>{
        console.log("hola desde el useeffect [count,name]")
        return () =>{
            console.log("Clean up de useeffect [count,name]")
        }
        
    },[count,name])


    // al inicio del render y cuando cambie name
    useEffect(()=>{
        console.log("hola desde el useeffect [name]")
        return () =>{
            console.log("Clean up de useeffect [name]")
        }
        
    },[name])

  return (
    <>
    <div onClick={()=>setName("Coderhouse Argentina")}>Nombre: {name}</div>
    <button onClick={()=>setCount(count+1)}>Contador: {count}</button>
    </>
  )
}

export default Hooks