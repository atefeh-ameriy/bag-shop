import React from "react";
import { useGlobalContext } from "../context";
import "./favo.css";
import { HiShoppingCart } from "react-icons/hi";
import { CiWarning } from "react-icons/ci";
import { IoMdHeartDislike } from "react-icons/io";

function Favorite() {
  const { dispatchfav, statefav, dispatch } = useGlobalContext();
  const formatPrice = (price) => {
    return new Intl.NumberFormat("fa-IR").format(price); // Change 'fa-IR' to your desired locale
  };

  return (
    <div className="bg-for-shoping">
      <div className="favorite-cart">
        {statefav.length === 0 ? (
          <div className="warningfavo">
            <CiWarning
              style={{ color: "#eca31c", fontSize: "35px", fontWeight: "900" }}
            />{" "}
            <p className="cart-emtyfavo"> در حال حاظر هیچ محصولی اضافه نشده.</p>
          </div> // Message when statefav are empty
        ) : (
          statefav.map((item, index) => {
            return (
              <article className="favorit-article" key={index}>
                <img src={item.img} alt="itemimg" className="img-item" />
                <p>{item.name}</p>
                <p>{item.code}</p>
                <p>{formatPrice(item.price)} تومان</p>
                <div className="btn-favorite">
                  <button
                    className="btn"
                    onClick={() => dispatch({ type: "ADD", payload: item })}
                  >
                    <HiShoppingCart className="shopicon" />
                  </button>
                  <button
                    className="btn"
                    onClick={() =>
                      dispatchfav({ type: "REMOVE", payload: item })
                    }
                  >
                    <IoMdHeartDislike className="shopicon" />
                  </button>
                </div>
              </article>
            );
          })
        )}
      </div>
 
    </div>
  );
}

export default Favorite;
