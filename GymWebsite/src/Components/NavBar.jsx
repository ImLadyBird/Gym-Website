import Logo from "../Images/Logo.png";
import Ham from "../Images/Ham.png"
import "./NavBarStyle.css"
import { useState } from "react";
export default function NavBar(){
    const [open  , setOpen] =useState(false)
    return (
    <div className="NavContainer">
  <div className="NavBar"> 
    <img src={Logo} alt="logo" />
    <button onClick={() => setOpen(!open)} className="hamburger">
      <img src={Ham} alt="Hamburger menu button" />
    </button>
    <div  className="MainMenu">
       <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Programs</a></li>
        <li><a href="#">Coaching</a></li>
        <li><a href="#">Membership</a></li>
        <li><a href="#">About Us</a></li>
       </ul>
       <div className="Login">
        <li><button className="login">Login</button></li>
        <li><button className="signup">Sign Up</button></li>
       </div>
     </div>  
  </div>

  <ul className={`HamList ${open ? "open" : ""}`}>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
    <li><a href="#">Login</a></li>
    <li><a href="#">Sign Up</a></li>
  </ul>
</div>
    )
}