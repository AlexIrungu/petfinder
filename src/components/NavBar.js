import React from "react";
import { NavLink } from "react-router-dom";

function NavBar () {
    return(
      <div>
        <nav className="navbar">
            <div className="container-fluid">
                <a className="navbar-brand" id="home-link" href="" >Home</a>
                <ul>
                    <li>
                        <a></a>
                    </li>
                    <li>
                        <a></a>
                    </li>
                    <li>
                       <a></a>
                    </li>
                </ul>

                <a href=""><button>LogOut</button></a>

            </div>

        </nav>
      </div>
    )
}
export default NavBar