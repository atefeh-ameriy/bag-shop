import React, { useEffect, useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import "./search.css";
import { useGlobalContext } from "../context";
import Product from "../components/products/Product";
import { Link, NavLink } from "react-router-dom";

function Search() {
  const { setSearch, filteredData, search, isOpen, setIsOpen, containerRef } =
    useGlobalContext();
  const [disableList, setDisableList] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("fa-IR").format(price); // Change 'fa-IR' to your desired locale
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
    setIsOpen(true); // Show product list when typing
  };
  const submit = () => {
    e.preventDefault();
  };

  return (
    <div ref={containerRef} >
      <form onSubmit={submit}>
        <input
          onChange={handleChange}
          placeholder="جستجو"
          value={search}
          onClick={() => setDisableList(false)}
          className="searchinput"
        />
        <span >
          <IoSearchOutline />
        </span>
      </form>
      {isOpen && search && filteredData.length > 0 && (
        <div
          className={`search-list ${disableList ? "hidelist" : null}`}
          onClick={() => setDisableList(true)}
        >
          {filteredData.map((item) => {
            const { price } = item;
            return (
              <Link to="/productitemlist" key={item.id} className="productlist">
                <article className="show-list">
                  <img src={item.img} alt="itemimg" className="img-listitem" />
                  <p className="plist">{item.name}</p>
              {/*  <p className="plist">{item.code}</p>*/}
                  <p className="plist">{formatPrice(price)}</p>
                </article>{" "}
              </Link>
            );
          })}
        </div>
      )}
     
      {search && filteredData.length === 0 && <div className="notfoundlist"> <div>  هیچ محصولی یافت نشد.</div>  </div>}</div>
  
  );
}

export default Search;
