import PetCard from "../components/PetsCard";
import { useStore } from "zustand";
import  petsStore  from "../data/PetsStore";
import Search from "../components/SearchForPets";
//import AddPet from "../components/AddNewPets";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function AllPets(){
    const pets = useStore(petsStore)
    const [myPets, setMyPets] = useState([]);
useEffect(() => {
//this will be the fetch to a specific users pets
axios.get("https://alexirungu.onrender.com/").then((r) => setMyPets(r.data));
    }, []);
    useEffect(() => {
      pets.setPetsStore(myPets);
    }, [myPets]); 
    return (<>
      {/* //<Link exact to="/mypets"><p>View my pets</p></Link> */}
      <div className="flex flex-row items-center justify-center bg-green-300">
      <h1 className="text-4xl mr-4 ml-4">Petfinder</h1>
      <Link exact to="/"><p className="text-center mr-4  text-blue-800 underline hover:text-red-800">Home</p></Link>
       <Search/>
       </div>
       {/* <AddPet/> */}
       {pets.petsList.map((pet)=>{
     return <PetCard pet={pet}/>
       })}
       </>
    )
}
export default AllPets;