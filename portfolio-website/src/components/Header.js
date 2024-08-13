import React from "react"
import { Link } from 'react-router-dom'
import profileImage from '../assets/brayan.png'
import '../styles/HeaderStyle.css'

const Header = () => {
    return(
        <header>
            <nav>
                <img src={profileImage} alt='Brayan' width={'100'} height={'100'} ></img>
                <ul className="nav">
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
};



export default Header;
