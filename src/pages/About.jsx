import React from 'react';
import './About.css'; // فایل CSS برای استایل
import about from "../assets/imgs/about.png"
const About = () => {
    return (
        <div className="about-container">
            <div className="about-text">
                <div className="aboutwrap-text">
                <h1>درباره فروشگاه کیف فروشی ریرا</h1>
                <p>
                    فروشگاه ریرا به عنوان یکی از بهترین فروشگاه‌های کیف در ایران، 
                    با هدف ارائه محصولات با کیفیت و متنوع به مشتریان عزیز تأسیس شده است. 
                    ما در ریرا تلاش می‌کنیم تا جدیدترین و زیباترین کیف‌ها را با بهترین قیمت‌ها 
                    به شما ارائه دهیم.
                </p>
                <p>
                    ما به کیفیت محصولات خود اهمیت می‌دهیم و همواره در تلاش هستیم تا 
                    نیازهای مشتریان خود را برآورده کنیم. به ما بپیوندید و از تجربه خریدی 
                    لذت‌بخش بهره‌مند شوید!
                </p></div>
            </div>
            <div className="about-image">
            <img src={about} alt="" />
            </div>
        </div>
    );
};

export default About; 