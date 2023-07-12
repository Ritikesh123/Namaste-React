import { LOGO_URL } from "../utils/constants.jsx"
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.jsx";


const Header= () => {
    const [btnButtonReact, setBtnButtonReact]= useState("login");

    const onlineStatus= useOnlineStatus();

    return(

        <div className="flex justify-between bg-pink-100  shadow-lg md:bg-yellow-100 lg:bg-green-100">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL}/>
            </div>
            <div className=" flex items-center">
            <ul className="flex p-3 m-2">
                <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
        
                <li className="px-4">
                    <Link to="/">Home</Link>
                </li>

                <li className="px-4">
                    <Link to="/About">About us</Link>
                </li>

                <li className="px-4">
                    <Link to="/Contact">Contact us</Link>
                </li>

                <li className="px-4">
                    <Link to="/grocery">Grocery</Link>
                </li>
                
                <li className="px-4">
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