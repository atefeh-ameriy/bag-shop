import React from 'react'
import Banner from '../components/banner/Banner'
import ProductList from '../components/products/ProductList'
import Filter from '../components/filter/Filter'

function Home() {
  return (
    <div className='home'>
     <Banner/>
     <Filter/>
     <ProductList/>
    </div>
  )
}

export default Home