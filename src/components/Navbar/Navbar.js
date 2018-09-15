import React from "react";
import "./Navbar.css";

const Navbar = props => (
        <nav className="navbar navbar-default navbar-fixed-top">
           <ul>
            <li className="title">Clicky Game</li>
            <li className= {props.message}></li>            
            <li className="scoring">Current Score: {props.curScore} | Top Score: {props.topScore}</li>
          </ul>
        </nav>
      );
  
export default Navbar;