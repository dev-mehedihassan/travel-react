import React, { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import './test.css';

const Test = () => {

  const [value, setValue] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="page-container">
      <div className="card">
        
        <h1 className="heading">
          Count Value: {value}
        </h1>

        <div className="button-group">
          <button onClick={() => setValue(value - 1)} className="btn-decrement">
            Decrement
          </button>
          <button onClick={() => setValue(value + 1)} className="btn-increment">
            Increment
          </button>
        </div>

        <div className="password-container">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter Your Password..."
            className="password-input"
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="eye-btn">
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Test;