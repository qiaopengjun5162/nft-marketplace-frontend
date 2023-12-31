import { useEffect, useState } from 'react';
import './App.css';
import logo from './logo.svg';

function WelcomeMessage() {
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
}

function Counter({ name }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Counter ${name} clicked ${count} times.`);
  }, [count, name]);

  return (
    <div>
      <p>{name} clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

function App() {
  const message = 'Welcome to React!';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{message}</p>
        <WelcomeMessage />
        <Counter name="qiao" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
