import axios from "axios";
import { useStore } from "zustand";
import  petsStore  from "../data/PetsStore";

function Delete({pet}) {
  const pets = useStore(petsStore);
  let other_pets = pets.petsList.filter((thispet)=>{
    return thispet.id !== pet.id
   })
  const handleDelete = () => {
    axios
      .delete(`https://alexirungu.onrender.com/${pet.id}`)
      .then(() => pets.setPetsStore(other_pets));
  };
  return <button className="border-2 m-2 bg-green-300 text-black  hover:border-black hover:text-white hover:bg-black" onClick={handleDelete}> Delete</button>;
}

export default Delete;