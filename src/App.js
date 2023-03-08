import './App.css';
import DisplayPets from './components/DisplayPets';
import LoginForm from './components/Login';
import SignupForm from './components/Signup';
import './index.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AddPet from './components/AddNewPet';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/pets" element={<DisplayPets />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/*" element={<Navigate to="/login" />} />
          <Route path="/addpet" element={<AddPet/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;