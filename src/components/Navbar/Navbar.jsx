import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import './Navbar.css'

const Navbar = ({ SetshowLogin }) => {

    const [menu, setmenu] = useState("home");

    const { getTotalCartAmount,token,setToken } = useContext(StoreContext);
    const navigate = useNavigate();

    const logoutHandler = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");

    }
    
    return (
        <div className='navbar'>
            <Link to={'/'} onClick={() => setmenu("home")}><img src={assets.logo} alt="" className='logo' /></Link>
            <ul className='navbar-menu'>
                <Link to={'/'}><li onClick={() => setmenu("home")} className={menu === "home" ? "active" : ""}>Home</li></Link>
                <Link to={'/allProduct'}> <li onClick={() => setmenu("menu")} className={menu === "menu" ? "active" : ""}>Product</li></Link>
                <Link to={'/about'}> <li onClick={() => setmenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>About</li></Link>
                <Link to={'/contactus'}><li onClick={() => setmenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>ContactUs</li></Link >
            </ul>

            <div className="navbar-right">
                {/* <img src={assets.search_icon} alt="" /> */}

                <div className="navbar-search-icon">
                    <Link to={'/cart'}><img src={assets.basket_icon} alt="" /> </Link>

                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>

                {!token ? <button onClick={() => SetshowLogin(true)}>sign in </button> :
                    <div className='navbar-profile'>
                        <img className='profile-img' src={assets.profile_icon} alt="" /> 
                        <ul className='nav-profile-dropdown'>
                            <li><img src={assets.bag_icon} alt="" />Orders</li>
                            <hr />
                            <li onClick={logoutHandler}><img src={assets.logout_icon} alt="" />Logout </li>
                        </ul>
                    </div>
                }
                
            </div>
        </div>

    )
}

export default Navbar