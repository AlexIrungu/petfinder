import { useAuth } from '../components/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) return null;

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/home" className="text-white text-xl font-bold">
              🐾 PetFinder
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link to="/home" className="text-white hover:text-purple-200 px-3 py-2 rounded-md transition-colors">
                Home
              </Link>
              <Link to="/pets" className="text-white hover:text-purple-200 px-3 py-2 rounded-md transition-colors">
                All Pets
              </Link>
              <Link to="/addpet" className="text-white hover:text-purple-200 px-3 py-2 rounded-md transition-colors">
                Add Pet
              </Link>
              <Link to="/mypets" className="text-white hover:text-purple-200 px-3 py-2 rounded-md transition-colors">
                My Pets
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-white">Welcome, {user.username}!</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
