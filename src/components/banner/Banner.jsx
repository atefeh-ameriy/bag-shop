import React from 'react'
import img from '../../assets/imgs/banner.png';
import "./Banner.css"
function Banner() {
  return (
    <div>
      <img src={img} alt="banner" className='banner' />
      
    </div>
  )
}

export default Banner