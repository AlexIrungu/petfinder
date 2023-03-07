//import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
//import PetCard from './components/PetsCard';
//import Search from './components/SearchForPets';
import Mypets from './views/MyPets';
import AllPets from './views/AllPets';
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import Login from './components/LoginUser';
import Register from './components/RegisterUsers';



function App() {
  return (
    <Router>
    <Switch>
    <Route exact path="/"><Home/></Route>
    <Route exact path="/mypets"><Mypets/></Route>
    <Route exact path="/allpets"><AllPets/></Route>
    <Route path = "/login"><Login/></Route>
    <Route path = "/signup"><Register/></Route>
    </Switch>
    </Router>
  );
}

export default App;
