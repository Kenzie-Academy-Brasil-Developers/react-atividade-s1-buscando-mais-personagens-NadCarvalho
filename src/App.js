import './App.css';
import { useState, useEffect } from 'react'
import Characters from "./Components/Characters"


function App() {
  const [characterList, setCharacterList] = useState([])

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then(response => response.json())
      .then(data => data.results)
      .then(results => setCharacterList(results))
  }, [])
  
  return (
    <div className="App">
      <Characters list={characterList} />
    </div>
  );
}

export default App;
