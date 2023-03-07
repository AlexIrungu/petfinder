// // import logo from './logo.svg';
// import React from 'react';
// import NavBar from './components/NavBar';
// import Login from './components/Login';
// import  LandingPage  from './components/LandingPage';
// import Home from './components/Home';
// import About from './components/About';
// import './App.css';
// import SignUp from './components/SignUp';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <NavBar />
//         <Login />
//         <SignUp />
//         <LandingPage />
//         <Home />
//         <About />
  
//       </header>
//     </div>
//   );
// }

// export default App;

//import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import AllPets from './views/AllPets';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Mypets from './views/MyPets';



function App() {
  return (
    <Router>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/mypets" element={<Mypets/>}/>
    <Route exact path="/allpets" element={<AllPets/>}/>
    </Routes>
    </Router>
  );
}

export default App;