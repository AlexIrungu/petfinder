import PetCard from "../componets/PetsCard";
import { useStore } from "zustand";
import { petsStore} from "../data/PetsKeeper";
import Search from "../componets/SearchForPets";
import  Link  from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
//import AddPet from "../componets/AddNewPets";

function AllPets() {
  const pets = useStore(petsStore);
  const [myPets, setMyPets] = useState([]);

  useEffect(() => {
    // This will be the fetch to a specific user's pets
    axios.get('http://localhost:9292/')
      .then((r) => setMyPets(r.data));
  }, []);

  useEffect(() => {
    pets.setPetsStore(myPets);
  }, [myPets]);

  return (
    <>
      <div className="header">
        <h1 className="title">Petfinder</h1>
        <Link exact to="/" className="link">Home</Link>
        <Search />
      </div>
      <div className="pets-container">
      {pets.petsList.map((pet)=>{
     return <PetCard pet={pet}/>
       })}
      </div>
    </>
  );
}

export default AllPets;