import React from 'react';
import './App.css';

// componentes globales
import Navbar from './shared/navbar';
import Footer from './shared/footer';

// bloques para la portada
import Personaldata from './pages/personaldata';
import Skills from './pages/skills';
import Techstack from './pages/techstack';
import Hobbies from './pages/hobbies';

function App() {
  return (
    <>
      <Navbar/>
      <img src="src\assets\avatar4.png" alt="Foto de avatar" className="logo"/>
      <div className="container">
        <Personaldata/>
        <Skills/>
        <Techstack/>
        <Hobbies/>
      </div>
      <Footer/>
    </>
  )
}

export default App
