import React, { useState } from 'react'
import  './LoginPopUp.css'
import { assets } from '../../assets/assets';

const LoginPopUp = ({ SetshowLogin }) => {
  const [currState, setcurrState] = useState("Login");
  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img src={assets.cross_icon} onClick={() => SetshowLogin(false)} alt="" />
        </div>

        <div className="login-popup-inputs">
          {currState === "Login" ? <></> : <input type="text" placeholder='Enter your name' required />}
          <input type="email" placeholder='Enter your email' required />
          <input type="password" placeholder='Enter your password' required />
        </div>

        <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing , i agree to the teerms of use $ privacy policy.</p>
        </div>

        {currState === "Login" ? <p>Create a new account? <span onClick={() => setcurrState("Sign Up")}>Click here</span></p> : <p>Already have an account? <span onClick={() => setcurrState("Login")}>Login Here </span></p> }

      </form>

      
    </div>
  )
}

export default LoginPopUp