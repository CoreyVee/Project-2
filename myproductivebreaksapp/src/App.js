import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Favorites from "./Favorites";
import Tips from "./About";
import "./App.css";

function App(bored) {
  const [favorite, setFavorite] = useState([]);

  const handleAddFavorite = (activity, type, participants) => {
    const favorites = [...favorite];
    favorites.push({activity,participants, type});
    setFavorite(favorites)
  };

  const handleRemoveFavorite = (object) => {
    const favorites = [...favorite];
    const newFavorites = favorites.filter((activity) => activity !== object);
    setFavorite(newFavorites);
  };
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home handleAddFavorite={handleAddFavorite}
            favorite={favorite}
                handleRemoveFavorite={handleRemoveFavorite}
                bored={bored} />}
          />
          <Route
            path="/Favorites"
            element={
              <Favorites
                favorite={favorite}
                handleRemoveFavorite={handleRemoveFavorite}
              />
            }
          />
          <Route path="/About" element={<Tips />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
