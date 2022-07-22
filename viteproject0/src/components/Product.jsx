import React from 'react'

const Product = ({modelo,marca,color}) => {
  return (
    <div className='bg-rose-300 p-3 rouded-md text-lg '>
    <div>Modelo : {modelo} </div>
    <div>Marca : {marca} </div>
    <div>Color : {color} </div>
    </div>

  )
}

export default Product