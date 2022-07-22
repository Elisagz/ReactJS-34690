// console.log("hola")

// let total=0
// for (let i=0 ;i<500000000;i++){
//     total+=5
// }
// console.log(total)

// console.log("ultima tarea")

//codigo asincrono
// 3 formas
// 1-async callbacks
// 2-Promesas
// 3-async await

//callback sincrono
// const generarNumero=()=>{
//  return Math.floor(Math.random() * 10)
// }

// const printNumero=(callback)=>{
//     let numero=callback()
//     console.log(numero)
// }

// printNumero(generarNumero)

//callback asincrono

// const bajarVideo =(url,callback)=>{
//     console.log(`Bajando video de... ${url}`)

//     setTimeout(()=>{
//         console.log("Video descargado correctamente")
//         callback(url)
//     },3000)
// }


// const reproducirVideo=(url)=>{
//     console.log(`Reproduciendo Video de ${url}`)

// }
// let url="http:/Youtube.com"
// bajarVideo(url)
// reproducirVideo(url)
// bajarVideo(url,reproducirVideo)


//Promesa
//construccion de una promesa
// const nombreDeMiPromesa = new Promise((resolve,reject)=>{})

let aprobasteElCurso =true

// const siAprueboElCurso = new Promise((resolve,reject)=>{
//     if(aprobasteElCurso){
//         const telefono ={
//             modelo: 'Iphone12',
//             capacidad: '128GB',
//             color: 'rojo'
//         }
//         resolve(telefono)
//     }else{
//         reject('Reprobaste el curso')
//     }
// })


///consumir la promesa
// funcines manejadora

// const promesaCumplida=(resolvedValue)=>{
//     console.log(`te regalo  tu nuevo ${resolvedValue.modelo}`)
// }
// const promesaRota=(rejectValue)=>{
//     console.log(`No te compro nada porque ${rejectValue}`)   
// }
//consumo la promesa
// siAprueboElCurso.then(promesaCumplida,promesaRota)

// siAprueboElCurso
//     .then(
//     (result)=>{
//     throw new Error ('Cometimos un error por aqui')
//     console.log(`te regalo  tu nuevo ${result.modelo}`)
//     }).catch((err)=>{
//     console.log(`Captura cualquier error en el proceso`)
//    })

//Crear funciones que retornen una promesa
const chequeaNotas = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        if(aprobasteElCurso){
            const telefono ={
                modelo: 'Iphone12',
                capacidad: '128GB',
                color: 'rojo'
            }
            resolve(telefono)
        }else{
            reject('Reprobaste el curso')
        }
    },5000)
    })
}

//consumir promesa
chequeaNotas()
    .then((result)=>{
        console.log(`Te regalo tu nuevo ${result.modelo}`);
    }).catch((err)=>{
        console.log(`Error ${err}`)
    }).finally(()=>{
        console.log("La promesa termino")
    }

    )





