import React from 'react';
import {Outlet} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import profileImage from './assets/brayan.png'




const App = () => (
    <div>
      <img src={profileImage} alt='Brayan' width={'100'} height={'100'} ></img>
      <Header />
      <main><Outlet /></main>
      <Footer />
    </div>

);

export default App;
