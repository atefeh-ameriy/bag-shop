import React from "react";
import { useGlobalContext } from "../context";
import { CiWarning } from "react-icons/ci";
import { MdRemoveShoppingCart } from "react-icons/md";


import "./Bagshop.css";

function Bagstore() {
  const { dispatch, state } = useGlobalContext();

  // Function to format numbers with commas
  const formatPrice = (price) => {
    return new Intl.NumberFormat("fa-IR").format(price); // Change 'fa-IR' to your desired locale
  };

  // Calculate total cost
  const total = state.reduce((total, item) => {
    return Math.round(total + parseInt(item.price) * item.quantity);
  }, 0);
  if (state.length === 0) {
    return(
    <div className="warning" >
      <CiWarning
        style={{ color: "#eca31c", fontSize: "35px", fontWeight: "900" }}
      />
      <p className="cart-emty"> در حال حاظر هیچ محصولی اضافه نشده.</p>
    </div>); // Message when favorites are empty
  }
  return (
    <div className="cart">
      {state.map((item, index) => {
        const price = parseInt(item.price); // Convert price to integer
        const itemTotal = price * item.quantity;

        return (
          <div className="card" key={index}>
            <img
              src={item.img}
              alt=""
              style={{
                width: "100px",
                height: "100px",
                border: ".8px solid gray",
                borderRadius: "5px",
              }}
            />
           {/* <p>{formatPrice(price)} تومان</p>  Display formatted price */}
            <p>{formatPrice(itemTotal)} تومان</p>{" "}
            {/* Total cost for this item */}
            <div className="quantity">
              <button
                onClick={() => dispatch({ type: "INCREASE", payload: item })}
              >
                +
              </button>
              <p>{item.quantity}</p>
              <button
                onClick={() => {
                  if (item.quantity > 1) {
                    dispatch({ type: "DECREASE", payload: item });
                  } else {
                    dispatch({ type: "REMOVE", payload: item });
                  }
                }}
              >
                -
              </button>
            </div>
            <h2 onClick={() => dispatch({ type: "REMOVE", payload: item })}>
            <MdRemoveShoppingCart />

            </h2>
          </div>
        );
      })}
      {state.length > 0 && (
        <div className="total">
          <p style={{ fontWeight: "500" }}>قیمت کل</p>
          <h2>{formatPrice(total)} تومان</h2>{" "}
          {/* Display formatted total cost */}
        </div>
      )}
    </div>
  );
}

export default Bagstore;
