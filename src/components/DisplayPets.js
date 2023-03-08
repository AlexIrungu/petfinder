import { useEffect, useState } from 'react';
import axios from 'axios';

const DisplayPets = () => {
  const [pets, setPets] = useState([]);
  const [newPetName, setNewPetName] = useState('');
  const [newPetBreed, setNewPetBreed] = useState('');
  const [newPetAge, setNewPetAge] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

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
  } ;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:9292/pets');
      setPets(result.data);
    };
    fetchData();
  }, []);

  const filteredPets = pets.filter(pet => pet.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="centered">
      
      <br />
      <nav>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="search">Search:</label>
          <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <button type="submit">Search</button>
        </form>
        
      </nav>

      {filteredPets.map((pet) => (
        <div key={pet.id}>
          <p><strong>NAME: </strong>{pet.name}</p>
          <p><strong>BREED: </strong>{pet.breed}</p>
          <p><strong>AGE: </strong>{pet.age}</p>
          <button>Delete Pet</button>
          <br />
        </div>
      ))}
    </div>
  );
  handleAddPet()
};

export default DisplayPets;