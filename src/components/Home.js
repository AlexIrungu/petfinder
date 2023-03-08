import { NavLink } from "react-router-dom"
import "../App.css"
import image from "../assets/images.jpeg"

function Home(){
return(
    <div className="container">
        
    <nav className="navbar">
     <NavLink exact to = "/home">
        <h2>HOME</h2>
     </NavLink>
     {/* <NavLink exact to = "/login">
        <h2>LOGIN</h2>
     </NavLink> */}
     {/* <NavLink exact to = "/signup">
        <h2>SIGN UP</h2>
     </NavLink> */}
     <NavLink exact to = "/addpet">
        <h2>ADD PET</h2>
     </NavLink>
     <NavLink exact to = "/pets">
        <h2>ALL PETS</h2>
     </NavLink>
     <NavLink>
     
        <button onClick={() => { window.location.href = 'http://localhost:3000/signup' }}>Logout</button>
      
     </NavLink>

    </nav>

    <div className="card">
        <h1>PET FINDER</h1>
        <p>A loyal and friendly companion</p>
        <h3>Sometimes all you need is your pet.</h3>
        
    </div>
    <div>
        <img src={image} alt="" />
        </div>
    </div>
)
}

export default Home