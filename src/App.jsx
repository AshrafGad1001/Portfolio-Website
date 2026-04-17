// import { useState } from 'react';
import React from 'react';
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";


function App() {


  return (
    <div className="container">

      <Header />
      <div className='section-separator'></div>
      <Hero />
      <div className='section-separator'></div>
      <Main />
      <div className='section-separator'></div>
      <Contact />
      <div className='section-separator'></div>
      <Footer />

    </div>
  )
}

export default App
