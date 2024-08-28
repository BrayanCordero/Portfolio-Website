import React from 'react';
import '../styles/HomeStyle.css'
import profileImage from "../assets/brayan-home1.jpg"
import calPoly from "../assets/cal_poly_logo.png"
import linked from "../assets/linkedin_logo.png"
import gitH from "../assets/github_logo.png"
import '../styles/HomeStyle.css'


const Home = () => {
    return (
        <div className='home-container'>

            <div className='links'>
                <a href='https://www.linkedin.com/in/brayan-cordero-alvarez-a0a290206' target="_blank" rel="noopener noreferrer"><img src={linked} alt='linkedin'></img></a>
                <a href='https://github.com/BrayanCordero?tab=repositories' target="_blank" rel="noopener noreferrer"><img src={gitH} alt='GitHub'></img></a>
            </div>

            <div className='img-container'>
                <img src={profileImage} alt='Brayan'></img>
            </div>
            
            <div className='greeting-container'>
                <h1 className='greeting'>Hello and Welcome</h1>
                <h2 className='name'>I'm Brayan Cordero</h2>
                <h3 className='title'>Full Stack Software Engineer</h3>
            </div>

        </div>
    )
};


export default Home;
