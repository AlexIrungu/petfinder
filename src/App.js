import './App.css';
import DisplayPets from './components/DisplayPets';
import LoginForm from './components/Login';
import SignupForm from './components/Signup';
import './index.css'
import React from 'react';
import { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, useNavigate } from 'react-router-dom';
import AddPet from './components/AddNewPet';
import Home from './components/Home';
import MyPets from './components/MyPets';
import { Navbar } from './components/Navbar';
import { AuthProvider, useAuth } from './components/AuthContext'


// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
      </div>
    );
  }
  
  return user ? children : <Navigate to="/login" />;
};


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/home" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />
            <Route path="/pets" element={
              <ProtectedRoute>
                <DisplayPets />
              </ProtectedRoute>
            } />
            <Route path="/addpet" element={
              <ProtectedRoute>
                <AddPet />
              </ProtectedRoute>
            } />
            <Route path="/mypets" element={
              <ProtectedRoute>
                <MyPets />
              </ProtectedRoute>
            } />
            <Route path="/" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;