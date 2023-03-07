import { useState } from "react"
import axios from "axios"
import { useStore } from "zustand"
import petsStore from "../data/PetsStore"

function AddPet({user_id}){
    const pets = useStore(petsStore)
    const [showForm,setShowForm] = useState(false)
    const [newPet, setNewPet] = useState({
    "name":"",
    "breed": "", 
    "image_url": "",
    "user_id":user_id
    })
    //console.log(newPet)
    const handleSubmit = (e)  =>{
    e.preventDefault()
    setShowForm(false)
    console.log(newPet)
    axios.post(`https://alexirungu.onrender.com/`,newPet).then((r) =>
    pets.setPetsStore([...pets.petsList, r.data])
);
    }

    if(showForm === false){
        return <button 
        onClick={() => setShowForm(true)
        } className="text-center text-blue-800 underline hover:text-red-800 ml-8 ">Add new pet</button>
    }else{
        return <form onSubmit={handleSubmit} className="flex flex-col ml-8 mt-4">
        <input className="text-center" type="text" placeholder="Pet name" onChange={(e) =>{
        setNewPet({...newPet, "name":e.target.value})
        }}></input>
        <input className="text-center mt-1" type="text" placeholder="Pet breed" onChange={(e) =>{
        setNewPet({...newPet, "breed":e.target.value})
        }}></input>
        <input className="text-center mt-1" type="url" placeholder="Pet image url" onChange={(e) =>{
        setNewPet({...newPet, "image_url":e.target.value})
        }}></input>
        <button type="submit" className="
        border-2 m-2 bg-red-300 text-black  hover:border-black hover:text-white hover:bg-black" >Add</button>
        </form>
    }

}

export default AddPet;