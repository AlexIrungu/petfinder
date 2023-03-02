import React from "react";
import { NavLink } from "react-router-dom";

function NavBar () {
    return(
      <div>
        <nav className="navbar">
            <div className="container-fluid">
                <a className="navbar-brand" id="home-link" href="" >Home</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#" id=""></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" id=""></a>
                    </li>
                    <li className="nav-item">
                       <a className="nav-link" href="" id=""></a>
                    </li>
                </ul>

                <form className="forms">
                    <input className="form-control" type="text" placeholder="Search" id="search"/>
                    <button className="btn" id="searchBtn">Search</button>

                </form>

                <a href=""><button>LogOut</button></a>

            </div>

        </nav>
      </div>
    )
}
export default NavBar