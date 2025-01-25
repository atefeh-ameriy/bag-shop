import React from 'react';
import './Signup.css';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div className="upinwrapp">
        <div className="auth-container">
            <h2>ورود</h2>
            <form className='upin'>
                <div className="form-group">
                    <input type="email" placeholder='ایمیل' required />
                </div>
                <div className="form-group">
                    <input type="password" placeholder='رمز' required />
                </div>
                <button className='sub-btn' type="submit">ورود</button>
            </form>
            <p >اکانت نداری؟ همین الان بساز     
                
                <NavLink to="/signup" className='upin-link' >
                ثبت نام
                  </NavLink>
                    
           </p>
        </div>
        
        
        </div>
    );
};

export default Login;