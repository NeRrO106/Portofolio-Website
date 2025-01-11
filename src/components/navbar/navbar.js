import React from "react";
import { NavLink } from 'react-router-dom';
import './navbar.css';

const NavBar = () =>{
    return(
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <NavLink className="navbar-brand" href="#">My Portofolio</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" activeclassname="active">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/skills" activeclassname="active">Skills</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/projects" activeclassname="active">Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/feedback" activeclassname="active">Feedback</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact" activeclassname="active">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;