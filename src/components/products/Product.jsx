import React, { useContext, useState } from "react";
import "./Product.css";


function Product({ img, usefor, name, code, price,id,item,icon }) {

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fa-IR').format(price); // Change 'fa-IR' to your desired locale
  };

  return (
    <article  className="articlepro">
      <img src={img} alt="itemimg" className="img-item" />
      <p>{name}</p>
      <p>{code}</p>
      <p>{formatPrice(price)}</p>
      

    </article>
  );
}        

export default Product;
