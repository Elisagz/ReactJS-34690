import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'

const ProductListContainer = () => {
    const [products,setProduct]=useState([])

    useEffect(()=>{
      setProduct([
        {
         id:1,
         modelo:"Sport" ,
         marca: "Nike",
         color: "Red"
        },
        {
        id:2,
        modelo:"Casual" ,
        marca: "Puma",
        color: "White"},
        {  
        id:3,  
        modelo:"Formal" ,
        marca: "CAT",
        color: "Brown"
       },
       {
        id:4,
        modelo:"Casual" ,
        marca: "Timberland",
        color: "Brown"
       },
       { 
       id:5,
       modelo:"Run" ,
       marca: "Rebook",
       color: "Purple"
      }]
      )
    },[])


  return (
    <>
    <h1 className='font-bold'>Productos disponibles</h1>
    <div className='bg-gray-100 p-4 m-5'>
    <ProductList products={products}/>
    </div>
    </>
  )
}

export default ProductListContainer