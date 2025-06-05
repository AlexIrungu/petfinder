import { useEffect, useState } from 'react';
import axios from 'axios';
import { Navbar } from './Navbar';

const DisplayPets = () => {
  const [pets, setPets] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const response = await fetch('http://localhost:9292/pets');
      const data = await response.json();
      setPets(data);
    } catch (error) {
      console.error('Error fetching pets:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredPets = pets.filter(pet =>
    pet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pet.breed.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
        <Navbar />
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">All Available Pets</h2>
          <div className="max-w-md">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
              Search Pets
            </label>
            <input
              type="text"
              id="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name or breed..."
              className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
        </div>
        
        {filteredPets.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No pets found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPets.map((pet) => (
              <div key={pet.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4 text-center">
                  {pet.breed.toLowerCase().includes('dog') ? '🐶' :
                   pet.breed.toLowerCase().includes('cat') ? '🐱' : '🐾'}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{pet.name}</h3>
                <p className="text-gray-600 mb-1"><strong>Breed:</strong> {pet.breed}</p>
                <p className="text-gray-600 mb-1"><strong>Age:</strong> {pet.age} years old</p>
                {pet.description && (
                  <p className="text-gray-600 mt-3">{pet.description}</p>
                )}
                <p className="text-sm text-gray-500 mt-4">
                  Added by: {pet.user?.username || 'Unknown'}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayPets;