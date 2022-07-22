const imprimirProductos = () =>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
         let producto ={
        name: "camisa",
        color: "rojo",
        talla:"M"
      }
      
      resolve(producto)
      },3000)
    })
  }
  
  imprimirProductos()
    .then((result)=>{
    console.log(result)
  }).
  catch((err)=>
     console.log("Error en la ejecucion de la promesa"))

//*************************************************************** */
//Alternativa de resolver el ejercicio:


const imprimirProductos2 = ()=>{
    return new Promise((resolve,reject)=>{
       
      setTimeout(()=>{
        //Tengo un array de objetos
          let productos =[
              {nombre:"Monitor",color:"Blanco"},
              {nombre:"Mouse",color:"Negro"},
              {nombre:"Adaptador",color:"Gris"}
            ]
            if(productos.length === 0){
                // console.log("algo")
                reject("No hay productos disponibles")
            }else{
                resolve(productos)
            }
          
      },3000)
    })
}

imprimirProductos2()
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log("Hay un error con los productos :" + error)
}).finally(()=>{
    console.log("Termino la consulta de productos")
})