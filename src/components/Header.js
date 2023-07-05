import { LOGO_URL } from "../utils/constants.js"
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";


const Header= () => {
    const [btnButtonReact, setBtnButtonReact]= useState("login");

    const onlineStatus= useOnlineStatus();

    return(

        <div className="Header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
            <ul>
                <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/About">About us</Link>
                </li>

                <li>
                    <Link to="/Contact">Contact us</Link>
                </li>

                <li>
                    <Link to="/grocery">Grocery</Link>
                </li>
                
                <li>
                    <Link to="/Cart">Cart</Link>
                </li>
                <button className="login" onClick={()=>{
                   btnButtonReact=== "login" 
                   ? setBtnButtonReact("logout") 
                   : setBtnButtonReact("login")
                }}
                >
                    {btnButtonReact}
                </button>
            </ul>
            
            </div>

        </div>
    );
};

export default Header;