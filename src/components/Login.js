import React from "react";

function Login(){
    return (
        <div>
            <form>
                <input type="text" placeholder="Enter Name"/><br />
                <input type="email" placeholder="Enter Email" /><br />
                <input type="password" placeholder="Enter Password" /><br />
                <a href=""><button type="submit">Log In</button></a>

                <span>
                    <h6>If you don't have an account</h6>
                    <a href=""><h6>Register Now!</h6></a>
                </span>
            </form>
        </div>
    )
}
export default Login