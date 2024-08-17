import React from 'react';
import '../styles/HomeStyle.css'
import profileImage from "../assets/brayan.png"
import '../styles/HomeStyle.css'


const Home = () => {
    return (
        <div className='home-container'>
            <div className='greeting-container'>
                <h1 className='greeting'>Hello and Welcome</h1>
                <h2 className='name'>I'm Brayan Cordero</h2>
                <h3 className='title'>Full Stack Engineer</h3>
            </div>
            <div className='img-container'>
                <img src={profileImage} alt='Brayan'></img>
            </div>
        </div>
    )
};


export default Home;
