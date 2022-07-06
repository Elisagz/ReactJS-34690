
// Tipos de datos Undefined Boolean Number Strings BigInt symbol null object

// Undefined
// let cliente 
// console.log(cliente)
// console.log(typeof cliente)

// Boolean
// const descuento = false
// console.log(descuento)
// console.log(typeof descuento)

// Number
// const numero1 = 20.20
// const numero2 = 30
// const numero3 = -100

// console.log(typeof numero1)
// console.log(typeof numero2)
// console.log(typeof numero3)

// Strings o Cadenas de Texto
//  const alumno = "Juan"
//  console.log(typeof alumno)


// Null
const descuento = null
console.log(typeof descuento)

//----------------------------------------------------------------------------------

//Operador ternario
 
//expresion ? ejecucion1 : ejecucion2
// const autenticado = false

// autenticado ? 
//     console.log("usuario autenticado") :
//     console.log("no autenticado dirigir hacia el login")

//doble ternario

// const saldo = 600
// const pagar = 800
// const tarjeta = false

// saldo > pagar ?
//   console.log("puedes pagar") :
//   tarjeta ? console.log("puedes pagar con tarjeta"):
//   console.log("no puedes pagar")

//Destructuring sacar el valor de una estructura

// const producto ={
//     nombre: "tablet",
//     precio:20,
//     disponible:true
// }

// const nombre = producto.nombre

// const {nombre, precio } = producto
// console.log(nombre,precio)

//spread operator
// const array = ['b', 'c','d']
// const array2 = ['z', 'g','j']
// let a = 'a'
// const newArray =[...array, a, ...array2]
// console.log(newArray)

// objects
// const producto = {
//     nombre: "Tablet",
//     precio: 300,
//     disponible: true
// }
// const cliente = {
//     nombre: "Coder",
//     Premium: true,
   
// }
// const nuevoObjeto ={...producto,...cliente}
// console.log(nuevoObjeto)
// const nuevoObjeto2 ={
//     producto:{...producto},
//     cliente: {...cliente}
// }
// console.log(nuevoObjeto2)




//--------------------------------------------------------------------------------------


// Template Strings ` 

// const producto = "Tablet de 12 pulgadas"
// const precio = 400
// const marca = "Orange"

// function textoDeFuncion() {
//     return "Este texto proviene de la función"
// }

// console.log( producto + " $" + precio + " Dolares, Marca: " + marca )

// console.log(`${producto} $${precio} Dolares, Marca: ${marca}, ${textoDeFuncion()}`)

// Template Strings ` 
// let nombre ='dan'
// let apellido ='abramov'

/*antes*/
// console.log("mi nombre es: "+ nombre+ " el apellido es: \n"+ apellido);

/*Ahora*/
// console.log(`mi nombre es ${nombre}, y mi apellido es:
// ${apellido}`);



//Valores por defecto

// function saludo(nombre="coder"){
//     console.log(nombre)
// }

// saludo('dan')
// saludo(null)
// saludo(undefined)
// saludo()


  








