import React, { useState } from 'react';
import "./Navside.css";
import { RiHome2Fill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi2";
import { HiMiniArchiveBox } from "react-icons/hi2";
import { IoCall } from "react-icons/io5";
import { RiFilter2Fill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa6";
import { IoMdLogIn } from "react-icons/io";
import { FaExpandAlt } from "react-icons/fa";
import { MdCloseFullscreen } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";


function Sidebar() {
  const [expand,setExpand]=useState(true)
  return (
    <div className={` ${expand ? "expandish" : "sidebar"}`}>
      <div className="side-logo">فروشگاه ریرا</div>
      <div className="side-link">
        <ul className="ul-sidelist">
       <li className="li-sidebar"><NavLink to="/" className="each-link" activeclassname="active"><span><RiHome2Fill/> </span> <p>صفحه اصلی</p></NavLink></li>
       <li className="li-sidebar"><NavLink to="/about" className="each-link" activeclassname="active"><span><HiUserGroup/></span><p> درباره ما</p></NavLink></li>
       <li className="li-sidebar"><NavLink to="/contact" className="each-link" activeclassname="active"><span><IoCall/></span> <p>تماس با ما</p> </NavLink></li>
       <li className="li-sidebar"><NavLink to="/productitemlist" className="each-link" activeclassname="active"><span><HiMiniArchiveBox/></span><p>محصولات</p></NavLink></li>
       <li className="li-sidebar"><NavLink to="/favorite" className="each-link" activeclassname="active"><span><FaHeart/></span><p>مورد علاقه</p></NavLink></li>

        </ul>
      </div>
      <button className="login"> <span className='ha'><IoMdLogIn className='loginicon'/><p>ورود | عضویت</p></span>  </button>
      <div className='expand' onClick={()=>setExpand(!expand)}>
      <FaExpandAlt/>
      </div>
      </div>
  )
}

export default Sidebar