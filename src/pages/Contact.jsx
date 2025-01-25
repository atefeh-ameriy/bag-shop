import React from "react";
import Location from "../components/map/Location";
import "./contact.css";
import { FaInstagram } from "react-icons/fa6";
import { PiTelegramLogoLight } from "react-icons/pi";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";





function Contact() {
  return (
    <div className="contact-container">
      <div className="info-detail">
        <h2 className="compony-name">ریرا شاپ</h2>
        <div className="uldiv"></div>
        <ul className="address">
          <li>
            <IoLocationOutline className="icon-address"/> <p>تهران / خیابان همت</p>
          </li>

          <li>
            <MdOutlinePhoneInTalk className="icon-phone"/> <p>0216655489 </p>
          </li>
          <li>
          <IoIosPhonePortrait className="icon-mobile"/> <p>09127568942</p>
          </li>
        </ul>
        <ul className="address-second">
          <li>
            <IoLocationOutline className="icon-address"/> <p>کرج / خیابان ثامن</p>
          </li>

          <li>
            <MdOutlinePhoneInTalk className="icon-phone"/> <p>0216655489 </p>
          </li>
          <li>
          <IoIosPhonePortrait className="icon-mobile"/> <p>09127568942</p>
          </li>
        </ul>
    
      {/*  <div className="social-links" >
       

       <a href="https://t.me/source_code_xui" className="circle">

       <PiTelegramLogoLight/>
       </a>
       <a href="https://linkedin.com/in/atefeh-ameri75" className="circle">
<CiLinkedin />       </a>
     
       <a href="https://www.instagram.com/code.xui?igsh=eXExNm93cm9nOTBt" className="circle">
       <FaInstagram />
       </a>
       <a href="https://mailto:amerii.atefeh@gmail.com" className="circle">
        <MdOutlineMail/>
       </a>
   </div>*/}
      </div>
      <div className="map">
        <Location />
      </div>
    </div>
  );
}

export default Contact;
