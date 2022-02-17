import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.svg'
function Nav(){
    return(
        <nav>
            <ul>
                <li>
                    <img src={logo} alt="logo_image" />
                </li>
                <li>
                    <Link to="#">Login</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Nav;