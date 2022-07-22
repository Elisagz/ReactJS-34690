import React from 'react'
import Product from './Product'

const ProductList = ({products}) => {
  return (
    <div className='grid grid-cols-4 gap-4'>
    {
        products.map((producto,i)=>
             <Product key= {i} modelo={producto.modelo} marca={producto.marca} color={producto.color} />
        )
    }
    </div>  
    )
}

export default ProductList