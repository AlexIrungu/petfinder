
import axios from "axios";
import { useStore } from "zustand";
import { petsStore } from "../data/PetsKeeper";

function Delete({pet}) {
  const pets = useStore(petsStore);
  let other_pets = pets.petsList.filter((thispet)=>{
    return thispet.id !== pet.id
   })
  const handleDelete = () => {
    axios
      .delete(`http://localhost:9292/${pet.id}`)
      .then(() => pets.setPetsStore(other_pets));
  };
  return <button onClick={handleDelete} id="delete-btn"> Delete</button>;
}

export default Delete;