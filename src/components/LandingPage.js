import React from "react";

function LandingPage(){
    return(
        <div>
            <nav className="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" id="home-link" href="">Home</a>
                    <a href="signup"><button className="btn">SignUp</button></a>
                    <a href="login"><button className="btn">LogIn</button></a>

                </div>
                

            </nav>
        </div>
    )

}
export default LandingPage