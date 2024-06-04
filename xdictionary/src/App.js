import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

const dictionary = [

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

]

function App() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');
  const handleClick = () => {
    const answer = dictionary.find(item => item.word.toLowerCase() === query.toLowerCase());
    if(!answer) setResult("Word not found in the dictionary.")
    else setResult(answer.meaning);
  }
  return (
    <div className="App">
      <input type='text' value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleClick}>Search</button>
      <p>{result}</p>
    </div>
  );
}

export default App;
