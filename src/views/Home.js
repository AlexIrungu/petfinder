import { useState } from "react";
import Register from "../componets/RegisterUsers";
import Login from "../componets/LoginUser";

function Home() {
  const [displayRegister,displayLogin] = useState(true)
  const changeForm = () =>{
    displayLogin(!displayRegister)
  }
if(displayRegister === true){
  return (<>
    <h1>Petfinder</h1>
    <Register changeForm={changeForm}/>
    <p onClick={changeForm} className="lUser">Already registered? 
    <div className="hover">
    Go to login
    </div>
    </p>
    
    </>);
}else{
  return (<>
    <h1 >Petfinder</h1>
    <Login changeForm={changeForm}/>
    <p  onClick={changeForm}  className="lUser">Go back to registration</p>
    </>);
}
}

export default Home;