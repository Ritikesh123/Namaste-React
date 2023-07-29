import { LOGO_URL } from "../utils/constants.jsx"
import { useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.jsx";
import UserContext from "../utils/UserContext.jsx";
import { useSelector } from "react-redux";



const Header= () => {
    const [btnButtonReact, setBtnButtonReact]= useState("login");

    const onlineStatus= useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser)

    // Subscribing to the store using selector
    const cartItems = useSelector((store) => store.cart.items)

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
                
                <li className="px-4 font-bold bg-gradient-to-b to
                hover:bg-fuchsia-600 rounded-lg duration-200">
                    <Link to="/cart">Cart ({cartItems.length} items)</Link>
                </li>
                   <button 
                    className="login" onClick={()=>{
                    btnButtonReact=== "login" 
                    ? setBtnButtonReact("logout") 
                    : setBtnButtonReact("login")
                   }}
                 >
                    {btnButtonReact}
                </button>

                <li className="px-4 font-bold">{loggedInUser}</li>

            </ul>
            
            </div>

        </div>
    );
};

export default Header;