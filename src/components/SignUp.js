import React from "react";

function SignUp(){
    return(
        <div>
            <form>
            <input type="text" placeholder="Enter Name" /><br />
                <input type="email" placeholder="Enter Email"/><br />
                <input  type="password" placeholder="Enter Password"/><br />
                <input type="password" placeholder="Confirm Password " /><br />
                <a href="login"><button type="submit">Sign Up</button></a>

                <span>
                    <h6>If you have an account</h6>
                    <a href="login"><h6>LogIn !</h6></a>
                </span>
            </form>
        </div>
    )

}
export default SignUp