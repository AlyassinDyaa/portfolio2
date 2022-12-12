import React from 'react';
import {About, Header,  Work, Skills, Testimonials, Footer,} from './container'
import Nav from "./container/bottomPageNav/Nav"
import { Navbar } from './components/index'
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <Nav/> {/* NAVIGATION BAR MIDDLE OF THE SCREEN */}
      <Navbar/> {/* NAVIGATION MENU TOP OF THE SCREEN */}
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Testimonials/>
      <Footer/>
    </div>
  );
};

export default App;
