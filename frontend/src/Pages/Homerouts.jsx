import React from 'react'
import Mainbanner from '../Components/Mainbanner'
import Bestseller from '../Components/Bestseller'
import Product from '../Components/Product'

function Homerouts({addToCart}) {
  window.scrollTo(0,0)
  return (
    <div>
      <Mainbanner></Mainbanner>
       <Bestseller></Bestseller>
        <Product addToCart={addToCart}></Product>
      
    </div>
  )
}

export default Homerouts
