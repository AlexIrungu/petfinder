import "../App.css"
import axios from 'axios';
import {useState,useEffect} from 'react'
function AddPet(){
    const [pets, setPets] = useState([]);
    const [newPetName, setNewPetName] = useState('');
    const [newPetBreed, setNewPetBreed] = useState('');
    const [newPetAge, setNewPetAge] = useState('');
  
    const handleAddPet = async () => {
      const result = await axios.post('http://localhost:9292/pets/addpet', {
        name: newPetName,
        breed: newPetBreed,
        age: newPetAge
      });
      setPets([...pets, result.data]);
      setNewPetName('');
      setNewPetBreed('');
      setNewPetAge('');
    };
  
    return(
        <>
        <div>
        <h2>Add a new pet:</h2>
        <form className="forms" onSubmit={handleAddPet}>
          <label htmlFor="newPetName">Name:</label>
          <input type="text" id="newPetName" value={newPetName} onChange={(e) => setNewPetName(e.target.value)} />
          <label htmlFor="newPetBreed">Breed:</label>
          <input type="text" id="newPetBreed" value={newPetBreed} onChange={(e) => setNewPetBreed(e.target.value)} />
          <label htmlFor="newPetAge">Age:</label>
          <input type="number" id="newPetAge" value={newPetAge} onChange={(e) => setNewPetAge(e.target.value)} />
          <button type="submit">Add New Pet</button>
        </form>
      </div>
        </>
    )
}

export default AddPet;