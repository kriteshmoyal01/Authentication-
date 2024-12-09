import React from 'react';
import './auth.css';  // Ensure this file exists for styles
import input from '../ui/input';

const Register = () => {
  return (
    <div className="auth_main">
      <form>
        <div className="auth_container">
          <div className="auth_header"></div>
          <div className='auth_item'>
            <label>Name *</label>
            <input placeholder='Enter your name'/>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
