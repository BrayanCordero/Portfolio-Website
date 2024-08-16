import React from 'react';
import '../styles/HomeStyle.css'
import profileImage from "../assets/brayan.png"
import '../styles/HomeStyle.css'


const Home = () => {
    return (
        <div className='home-container'>
            <div className='greeting-container'>
            <h1 className='greeting'>Hello and welcome, I'm Brayan Cordero</h1>
            <h1 className='title'>Full Stack Engineer</h1>
            </div>
            <div className='img-container'>
            <img src={profileImage} alt='Brayan'></img>
            </div>
        </div>
    )
};


export default Home;
