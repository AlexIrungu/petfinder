import axios from "axios";
import { useStore } from "zustand";
import  petsStore from "../data/PetsStore";

function Search(){
const pets = useStore(petsStore)
const handleSearch = (e) => {
    console.log(e.target.value)
axios.post("https://wamae-pet-finder.onrender.com/pets/search_all",{
    query: e.target.value
}).then( (r) =>
    pets.setPetsStore(r.data)
)
} 
return(
<input className="border-2 border-black text-center" type="text" placeholder="Search pet name or breed" onChange={handleSearch}></input>
)
}
export default Search;