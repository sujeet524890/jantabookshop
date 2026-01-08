import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Products = () => {
  const location= useNavigate() 

  const[product,setProduct]=useState([])

 useEffect(()=>{
     getData();
  },[])

  const getData = async()=>{
    const responce = await axios.get("http://localhost:4000/product")
     setProduct(responce.data.data)
      
     console.log(responce.data.data)
   
     
  }
// console.log(product)

  return (
    <div>
               <div className="bg-white flex justify-between  p-4 rounded shadow">
              <div><p className="mb-2 font-semibold">Product List</p>

              <button className="bg-blue-600 text-white px-4 py-2 rounded"
               onClick={()=>
                location('/Productform')
                  // console.log("hh")
              }>
                Add Product
              </button></div>
              <p className='text-2xl'>Total Product: {product.length}</p>
            </div>
<div className="mt-6 bg-white p-4 rounded shadow">
  <h2 className="text-lg font-semibold mb-4">Product List</h2>
              
  {/* Product Item */}
   {product.map((item)=>(
  <div className="flex items-center justify-between border-b pb-3 mb-3">
    <div className="flex items-center gap-4">
     
      <img
        src={item.image}
        alt="product"
        className="w-14 h-14 rounded object-cover"
      />

      <div>
        <p className="font-medium">{item.title}</p>
        <p className="text-sm text-gray-600">{item.price}</p>
      </div>
    </div>

    <div className="flex gap-2">
      <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
        Update
      </button>
      <button className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700">
        Delete
      </button>
      
    </div>
  </div>
   ))}
 
</div>   
    </div>
  )
}

export default Products
