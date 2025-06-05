import { useState, useEffect } from 'react';
import { useAuth } from '../components/AuthContext';
import { Navbar } from './Navbar';
import { Link } from 'react-router-dom';

const MyPets = () => {
  const [pets, setPets] = useState([]);
  const [editingPet, setEditingPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    fetchMyPets();
  }, []);

  const fetchMyPets = async () => {
    try {
      const response = await fetch(`http://localhost:9292/users/${user.id}/pets`);
      const data = await response.json();
      setPets(data);
    } catch (error) {
      console.error('Error fetching my pets:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (petId) => {
    if (window.confirm('Are you sure you want to delete this pet?')) {
      try {
        const response = await fetch(`http://localhost:9292/pets/${petId}`, {
          method: 'DELETE'
        });
        
        if (response.ok) {
          setPets(pets.filter(pet => pet.id !== petId));
        }
      } catch (error) {
        console.error('Error deleting pet:', error);
      }
    }
  };

  const handleEdit = (pet) => {
    setEditingPet({ ...pet });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:9292/pets/${editingPet.id}`, {
        method: 'PATCH',
        body: JSON.stringify(editingPet),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        const updatedPet = await response.json();
        setPets(pets.map(pet => pet.id === updatedPet.id ? updatedPet : pet));
        setEditingPet(null);
      }
    } catch (error) {
      console.error('Error updating pet:', error);
    }
  };

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
        <h2 className="text-3xl font-bold text-gray-900 mb-8">My Pets</h2>
        
        {pets.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-4">You haven't added any pets yet.</p>
            <Link
              to="/addpet"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Add Your First Pet
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pets.map((pet) => (
              <div key={pet.id} className="bg-white rounded-lg shadow-lg p-6">
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
                <div className="flex space-x-2 mt-4">
                  <button
                    onClick={() => handleEdit(pet)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(pet.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Edit Modal */}
      {editingPet && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Edit Pet</h3>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  value={editingPet.name}
                  onChange={(e) => setEditingPet({...editingPet, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Breed</label>
                <input
                  type="text"
                  value={editingPet.breed}
                  onChange={(e) => setEditingPet({...editingPet, breed: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                <input
                  type="number"
                  value={editingPet.age}
                  onChange={(e) => setEditingPet({...editingPet, age: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  required
                  min="0"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  rows={3}
                  value={editingPet.description || ''}
                  onChange={(e) => setEditingPet({...editingPet, description: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div className="flex space-x-4 pt-4">
                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded font-medium transition-colors"
                >
                  Update Pet
                </button>
                <button
                  type="button"
                  onClick={() => setEditingPet(null)}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded font-medium transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPets;