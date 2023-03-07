 import { useHistory } from "react-router-dom";
import { useState } from "react";
import {useEffect} from "react"
import axios from "axios";
import { useStore } from "zustand";
import  petsStore  from "../data/PetsStore";

function Login() {
  // const pets = useStore(petsStore)
  // const [users,setUsers] = useState([])
  // console.log(users)
  // useEffect(()=>{
  //  axios.get("http://localhost:9292/").then((r) =>
  //   setUsers(r.data)
  //  )
  // },[])
  // const [login, setLogin] = useState({
  //   username: "",
  //   password: "",
  // });
  // //console.log(login);
  //  const redirect = useHistory();
  // const handleSubmit = (e) => {
  //    e.preventDefault();
  //   //map through the users array
  //   let found_user = users.filter((user) =>{
  //     return user.username === login.username
  //   })
  //   if(found_user.length !== 0){
  //   if(found_user[0].password === login.password){
    
  //     axios.get(`http://localhost:9292/${found_user[0].username}`).then((r) =>{
  //     if(r.data.length === 0){
  //       pets.setPetsStore([{
  //       id:null,
  //       name:"",
  //       breed:"",
  //       image_url:"",
  //       user_id:found_user[0].id
  //           }]) 
  //            redirect("/mypets")
  //         }else{
  //       console.log(r.data)
  //       pets.setPetsStore(r.data) 
  //        redirect("/mypets")
  //     } 
  //     }    
  //     )
 
  //   }else{
  //     alert("Incorrect password")
  //   }}else{
  //     alert("Incorrect username")
  //   }
    //if the username entered by the user in login 
    //check the password
    //if they dont match alert incorrect password
    //matches the  username in login redirect them to my pets 
    //page and change the store to a fetch for that users pets
    //if the username does not match alert:
    // "a user with this name does not exist"
  
   
  // };
  return (
    <div className="flex justify-center items-center">
      <h1>login</h1>
    {/* <form onSubmit={handleSubmit} className="p-4 m-8 flex-col justify-center items-center w-72 border-4 border-black bg-green-300">
      <input
      className="  text-center border-2 border-black"
        type="text"
        placeholder="username"
        onChange={(e) => setLogin({ ...login, username: e.target.value })}
      ></input>
      <input type="password" placeholder="password" onChange={(e) => setLogin({
        ...login, password:e.target.value
      })} className="  text-center border-2 border-black"></input>
      <button className="border-2 bg-white text-black  hover:border-black hover:text-white hover:bg-red-300 mt-2 ml-[5.7rem]">Login</button>
    </form> */}
    
    </div>
  );
}
export default Login;