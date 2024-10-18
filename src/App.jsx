// src/App.jsx
import { useEffect, useState } from 'react' 
import { fetchStarships, searchStarships } from './services/starshipService';
import StarshipSearch from "./components/StarshipSearch";
import StarshipList from "./components/StarshipList"




const App = () => {
 // ! State
 const [starShips, setStarships] = useState([]);

 const getStarships = async () => {
  const data = await fetchStarships();
  setStarships(data);
};
 useEffect(() => {
  getStarships()
  console.log(starShips);
  
},[])
  return (
    <main>
      <h1>Star Wars API</h1>
      <h2>Starships</h2>
       <StarshipSearch />
       <StarshipList starShips={starShips} />
    </main>
  )
}

export default App

