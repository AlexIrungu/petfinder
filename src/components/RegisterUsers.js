import { useState } from "react"
import axios from "axios"
//
function Register({changeForm}){
    const [newUser,setNewUser] = useState({
        "username" :"",
        "password" : ""
    })
    console.log(newUser)
    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post("https://wamae-pet-finder.onrender.com/user",newUser)
        changeForm()
    }
    return(
        <div className="flex justify-center items-center ">
        <form onSubmit={handleSubmit} className="p-4 m-8 flex-col justify-center items-center w-72 border-4 border-black bg-green-300">
            <input type="text" placeholder="username" className="  text-center border-2 border-black" onChange={(e) => setNewUser({...newUser,username:e.target.value})}></input>
            <input type="password" placeholder="password" className=" text-center border-2 border-black" onChange={(e) => setNewUser({...newUser,password:e.target.value})}></input>
            <button className="border-2 bg-white text-black  hover:border-black hover:text-white hover:bg-red-300 mt-2 ml-[5.7rem]">Register</button>
        </form>
        </div>
    )
    }

export default Register