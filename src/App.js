import React, { useState } from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SupportMe from './components/SupportMe';
import Contact from './components/Contact';
import MainPage from './components/MainPage';



function App() {

  const [activeWindow, setActiveWindow] = useState('MainPage');

  return (
    <div className="App">
      <Navbar
        contact={() => { setActiveWindow('ContactPage'); }}
        login={() => { setActiveWindow('LoginPage'); }}
        mainPage={() => { setActiveWindow('MainPage'); }}
      />
      {activeWindow === 'MainPage' && <MainPage />}
      {activeWindow === 'ContactPage' && <Contact />}
      <SupportMe />
      <Footer />
    </div>
  );
}

export default App;
