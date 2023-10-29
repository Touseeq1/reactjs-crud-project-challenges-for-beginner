import React from "react";
import{NavLink} from "react-router-dom"
const Navv = () => {
    return (
        <>
        <nav className="right">
        <ul className="nav justify-content-end">
        <li className="nav-item">
            <NavLink className="nav-link active" to="/" aria-current="page" href="#">Home</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/contact"  href="#">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  className="nav-link" to="/logreg"> <button className="btn" to="/logreg">Login/Registration</button></NavLink>
        </li>
    </ul>   
        </nav>
       
        </>
    )
}
export default Navv