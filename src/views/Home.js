import { useStore } from "zustand";
import  petsStore  from "../data/PetsStore";
//import axios from "axios";
import { useState } from "react";
//import { useEffect } from "react";
import Register from "../components/RegisterUsers";
import Login from "../components/LoginUser";

function Home() {
  const [showRegister,showLogin] = useState(true)
  const changeForm = () =>{
    showLogin(!showRegister)
  }
if(showRegister === true){
  return (<>
    <h1 className="text-6xl text-center">Petfinder</h1>
    <Register changeForm={changeForm}/>
    <p className="text-center text-blue-800 underline hover:text-red-800 " onClick={changeForm}>Already registered? Go to login</p>
    </>);
}else{
  return (<>
    <h1 className="text-6xl text-center ">Petfinder</h1>
    <Login changeForm={changeForm}/>
    <p className="text-center text-blue-800 underline hover:text-red-800 " onClick={changeForm}>Go back to registration</p>
    </>);
}
}

export default Home;