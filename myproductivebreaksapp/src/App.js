import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {Route, Routes} from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Favorites from './Favorites'
import Tips from './Tips'
import './App.css';

function App() {
  const [favorite, setFavorite] = useState([]) 

  const handleAddFavorite = (object, type, participants) => {
    const favorites = [...favorite];
    favorites.push({object, type, participants});
    setFavorite(favorites)
  }

  const handleRemoveFavorite = (object) => {
    const favorites = [...favorite];
    const newFavorites = favorites.filter((activity) =>
    activity !== object);
    setFavorite(newFavorites);
  }

  return (
    <div className="App">
      <Header />
      <main>
      <Routes>
        <Route path='/' element= {<Home handleAddFavorite={handleAddFavorite}/>} />
        <Route path='/Favorites' element= {<Favorites favorite={favorite}
                                                      handleRemoveFavorite={handleRemoveFavorite}/>} />
        <Route path='/ProductivityTips' element= {<Tips />} />
      </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
