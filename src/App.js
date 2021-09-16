import './App.css';
import { useState, useEffect } from 'react'
import Characters from "./Components/Characters"
import Nav from './Components/Nav';


function App() {
  const [characterList, setCharacterList] = useState([])
  const [current, setCurrent] = useState('https://rickandmortyapi.com/api/character/')

  const [next, setNext] = useState('')
  const [prev, setPrev] = useState('')

  useEffect(() => {
    fetch(current)
      .then(response => response.json())
      .then(data => {
        setPrev(data.info.prev)
        setNext(data.info.next)
        setCharacterList(data.results)
      })
  }, [current])

  return (
    <div className="App">
      <Nav next={next} prev={prev} setCurrentPage={setCurrent}/>
      <Characters list={characterList} />
    </div>
  );
}

export default App;
