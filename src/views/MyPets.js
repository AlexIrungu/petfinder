import { useStore } from "zustand";
import petsStore  from "../data/PetsStore";
import PetCard from "../components/PetsCard";
import Delete from "../components/DeletePets";
import Edit from "../components/EditPets";
//import Search from "../components/SearchForPets";
//import axios from "axios";
//import { useState,useEffect } from "react";
import AddNewPet from "../components/AddNewPets";
import { Link } from "react-router-dom";

function Mypets(){
const myPets = useStore(petsStore);
return(
    <>
<div className="bg-green-300 ">
<h1 className="text-4xl mr absolute ml-4">Petfinder</h1>
<div className="flex flex-row  justify-center items-center ">
<Link exact to="/allpets"><p className=" text-blue-800 underline hover:text-red-800 mr-8">View all pets</p></Link>
<Link exact to="/"><p className="text-blue-800 underline hover:text-red-800 mb-6">Home</p></Link>
<AddNewPet user_id={myPets.petsList[0].user_id}/>
</div>
</div>
<div className="bg-red-300 ">
{
myPets.petsList.map((pet)=>{
return <>
    <PetCard pet={pet}/>
    <div className="flex justify-center">
    <Delete pet={pet}/>
    <Edit pet={pet}/>
    </div>
    </>
})
}
</div>
    </>
)


}

export default Mypets