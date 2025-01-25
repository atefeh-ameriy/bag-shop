import React from 'react'
import ProductList from '../components/products/ProductList'
import Filter from "../components/filter/Filter"
function ProductItemlist() {
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center" , alignItems:"center" ,padding:"30px"}}>
      <Filter />
      <ProductList/>
      </div>
  )
}

export default ProductItemlist