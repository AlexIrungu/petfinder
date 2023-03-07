import { useStore } from "zustand";
import petsStore from "../data/PetsStore";
import { useState } from "react";
import axios from "axios";

function Edit({pet}){
const pets = useStore(petsStore)
const [showForm,setShowForm] = useState(false)
const [editPet, setEditPet] = useState({
"name" : "",
"breed" : "",
"image_url" : "",
"user_id" : pet.user_id
})
console.log(editPet)
const handleSubmit = (e)  =>{
e.preventDefault()
setShowForm(false)
let other_pets = pets.petsList.filter((thispet)=>{
 return thispet.id !== pet.id
})
console.log(other_pets)
axios
.put(`http://localhost:9292/${pet.id}`,editPet)
.then((r) => pets.setPetsStore([...other_pets, editPet])
);
}
if(showForm === false){
    return <button className="border-2 bg-green-300 text-black  hover:border-black hover:text-white hover:bg-black m-2" 
    onClick={() => setShowForm(true)
    }>Update pet</button>
}else{
    return <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Pet name" onChange={(e) =>{
    setEditPet({...editPet, "name":e.target.value})
    }}></input>
    <input type="text" placeholder="Pet breed" onChange={(e) =>{
    setEditPet({...editPet, "breed" : e.target.value})
    }}></input>
    <input type="url" placeholder="Pet image url" onChange={(e) =>{
    setEditPet({...editPet, "image_url" : e.target.value})
    }}></input>
    <button type="submit">Update</button>
    </form>
}
}
export default Edit;