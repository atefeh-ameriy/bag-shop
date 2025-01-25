import React from 'react';
import './Signup.css';
import { NavLink } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="auth-container">
            <h2>ثبت نام</h2>
            <form>
                <div className="form-group">
                    <label>نام</label>
                    <input type="text" placeholder='نام'  required />
                </div>
                <div className="form-group">
                    <label>ایمیل</label>
                    <input type="email"  placeholder='ایمیل'  required />
                </div>
                <div className="form-group">
                    <label>رمز</label>
                    <input type="password"  placeholder='رمز'   required />
                </div>
                <button className='sub-btn' type="submit">ثبت نام</button>
            </form>
            <p>از قبل اکانت داشتی؟ 
                
            <NavLink to="/login" className='upin-link' >
            ورود
              </NavLink>
                
       </p>
        </div>
    );
};

export default Signup;