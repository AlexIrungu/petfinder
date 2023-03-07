
import { useStore } from "zustand";
import  petsStore  from "../data/PetsStore";
import Delete from "./DeletePets";

function PetCard({pet}){
    const pets = useStore(petsStore)
     return (
     <div className="flex flex-col items-center">
     <p className="text-2xl font-bold" key={pet.id}>{pet.name}</p>
     <img className="w-80" src={pet.image_url}/>
     </div>)
}
export default PetCard;