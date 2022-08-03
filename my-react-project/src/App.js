import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count,setCount] = useState(0);
  return (
    <div className="App">
      <h1>count: {count}</h1>
      <button onClick={() => {
        setCount(count => count + 1)
       
      }}>+1</button>
      <button onClick={() => {
        setCount(count => count - 1)
      }}>-1</button>
      <button onClick={() => {
        setCount(count => 0)
      }}>reset</button>
    </div>
  );
}

export default App;
