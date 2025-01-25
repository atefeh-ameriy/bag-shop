
import { useGlobalContext } from "../../context";
import Product from "./Product";
import "./Product.css";

import { HiShoppingCart } from 'react-icons/hi';
import { MdRemoveShoppingCart } from "react-icons/md";

import { FaHeart } from 'react-icons/fa';

function ProductList() {
  const { filteredData, dispatch, dispatchfav, state, statefav } = useGlobalContext();

  const handleToggleCart = (item) => {
    const isInCart = state.some(cartItem => cartItem.id === item.id);
    if (isInCart) {
      dispatch({ type: "REMOVE", payload: item });
    } else {
      dispatch({ type: "ADD", payload: item });    }
  };


  const handleToggleFavorite = (item) => {
    const isFavorite = statefav.some(favItem => favItem.id === item.id);
    if (isFavorite) {
      dispatchfav({ type: "REMOVE", payload: item });
    } else {
      dispatchfav({ type: "ADD", payload: item });
    }
  };

  return (
    <div className="container item-container">
      {filteredData.map((item) => {
        item.quantity=1
        const isInCart = state.some(cartItem => cartItem.id === item.id);
        const isFavorite = statefav.some(favItem => favItem.id === item.id);

        return (
          <div key={item.id} className="item-article">
            <Product {...item} />
            <div className="btnspro">
            <button
                className="btn"
                onClick={() => handleToggleCart(item)}
              >
                {isInCart ? <MdRemoveShoppingCart className={`shopicon ${isInCart ? 'black' : ''}`} />  : <HiShoppingCart className={`shopicon ${isInCart ? 'black' : ''}`} /> }
               
              </button>
              <button
                className="btn"
                onClick={() => handleToggleFavorite(item)}
              >
                <FaHeart className={`shopicon ${isFavorite ? 'active' : ''}`} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;


{
  /*<FaHeart className={`shopicon ${likedProducts[item.id] ? "redheart" : ""}`} />
  import React, { useState } from "react";
import { useGlobalContext } from "../../context";
import Product from "./Product";
import "./Product.css";
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";

function ProductList() {
  const { data, addToFavorites, dispatch, search, dispatchfav, filteredData } =useGlobalContext();
    const [color,setColor] =useState(false)

  return (
    <div className="container item-container">
      {filteredData.map((item) => {
        item.quantity = 1;
        return (
          <div key={item.id} className="item-article">
            <Product {...item} />
            <div className="btnspro">
              <button
                className="btn"
                onClick={() => dispatch({ type: "ADD", payload: item })}
              >
                <HiShoppingCart className="shopicon first" />
              </button>
              <button
                className="btn"
                onClick={() => dispatchfav({ type: "ADD", payload: item })}
              >
                {/*<FaHeart className="" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;*/}
