import React from "react";
import "./NavTop.css";
import { RiHome2Fill } from "react-icons/ri";
import { IoMdPerson } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";
import { HiMiniArchiveBox } from "react-icons/hi2";
import { useGlobalContext } from "../context";
import { Link, NavLink } from "react-router-dom";
import Search from "./Search";
import { RiMenu3Line } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";

function Navbar() {
  const linkClass = ({ isActive }) => (isActive ? "greenbg" : "blackbg");
  const {
    state,
    statefav,
    NavMobileClick,
    openNavMobile,
    linksContainerRef,
    linksRef,
  } = useGlobalContext();
  const totalQuantity = state.reduce((total, item) => total + item.quantity, 0);
  const totalQuantityy = statefav.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav>
      <div className="nav-stuff">
        <div className="iconbar">
          <button onClick={NavMobileClick} className="hambur">
            {openNavMobile ? (
              <RiCloseLine style={{ color: "#4e5928" }} />
            ) : (
              <RiMenu3Line />
            )}
          </button>
        </div>
        <div className="nav-searchbox">
          <Search />
        </div>

        <div className="  hidenav" ref={linksContainerRef}>
          <ul className="ullist" ref={linksRef}>
            <li className="linav li-hidden">
              <NavLink to="/" className={linkClass} onClick={NavMobileClick}>
                <RiHome2Fill className="linkicon" />
                <span className="li-title">صفحه اصلی</span>{" "}
              </NavLink>
            </li>
            <li className="linav li-hidden">
              <NavLink
                to="/productitemlist"
                className={linkClass}
                onClick={NavMobileClick}
              >
                <HiMiniArchiveBox className="linkicon" />

                <span className="li-title">محصولات</span>
              </NavLink>
            </li>
            <li className="linav">
              <NavLink
                className={linkClass}
                to="/signup"
                onClick={NavMobileClick}
              >
                <IoMdPerson className="linkicon" />

                <span className="li-title">ورود </span>
              </NavLink>
            </li>
            <li className="linav bag-icon">
              <NavLink
                to="/favorite"
                className={linkClass}
                onClick={NavMobileClick}
              >
                <FaHeart className="linkicon" />
                {totalQuantityy > 0 && (
                  <span className="bag-count">{totalQuantityy}</span>
                )}

                <span className="li-title">مورد علاقه </span>
              </NavLink>
            </li>
            <li className="linav bag-icon">
              <NavLink
                to="/bagstore"
                className={linkClass}
                onClick={NavMobileClick}
              >
                <IoBagHandleSharp className="linkicon" />
                {totalQuantity > 0 && (
                  <span className="bag-count">{totalQuantity}</span>
                )}

                <span className="li-title">سبد خرید </span>
              </NavLink>
            </li>
            <div className="otherlinks">
              <li className="linav">
                <NavLink
                  className={linkClass}
                  to="/about"
                  onClick={NavMobileClick}
                >
                  <IoMdPerson className="linkicon" />

                  <span className="li-title">درباره ما </span>
                </NavLink>
              </li>
              <li className="linav">
                <NavLink
                  className={linkClass}
                  to="/contact"
                  onClick={NavMobileClick}
                >
                  <IoMdPerson className="linkicon" />

                  <span className="li-title"> تماس با ما</span>
                </NavLink>
              </li>
            </div>
          </ul>
        </div>
        <div className="nav-button">
          <button className="gapbtn">گپ</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
