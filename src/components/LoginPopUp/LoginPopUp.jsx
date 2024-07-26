import React, { useContext, useEffect, useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios';

const LoginPopUp = ({ SetshowLogin }) => {
  const [currState, setcurrState] = useState("Login");

  const { url, setToken } = useContext(StoreContext);

  const [data, setdata] = useState({
    name: "",
    email: "",
    password: ""
  });

  const onChangeHandler = (e) => {

    const name = e.target.name;
    const value = e.target.value;
    setdata(data => ({ ...data, [name]: value }))
  }

  const onLoginHandler = async (e) => {
    e.preventDefault();

    let newUrl = url;
    if (currState === "Login") {
      newUrl += "/api/user/login"
    } else {
      newUrl += "/api/user/register"
    }

    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      SetshowLogin(false);
    } else {
      alert(response.data.message);
    }

  }


  return (
    <div className='login-popup'>
      <form className="login-popup-container" onSubmit={onLoginHandler}>
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img src={assets.cross_icon} onClick={() => SetshowLogin(false)} alt="" />
        </div>

        <div className="login-popup-inputs">
          {currState === "Login" ? <></> : <input type="text" name='name' onChange={onChangeHandler} value={data.name} placeholder='Enter your name' required />}
          <input type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='Enter your email' required />
          <input type="password" name='password' onChange={onChangeHandler} value={data.password} placeholder='Enter your password' required />
        </div>

        <button type='submit'>{currState === "Sign Up" ? "Create account" : "Login"}</button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing , i agree to the teerms of use $ privacy policy.</p>
        </div>

        {currState === "Login" ? <p>Create a new account? <span onClick={() => setcurrState("Sign Up")}>Click here</span></p> : <p>Already have an account? <span onClick={() => setcurrState("Login")}>Login Here </span></p>}

      </form>


    </div>
  )
}

export default LoginPopUp