import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {Route, Link, Routes} from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Favorites from './Favorites'
import Tips from './Tips'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/Favorites' element= {<Favorites />} />
        <Route path='/ProductivityTips' element= {<Tips />} />
      </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
