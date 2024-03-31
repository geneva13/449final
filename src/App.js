import logo from './logo.svg';
import './App.css';

function MagicButton() {
  return (
  <button>Magic</button>

  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I Edited <code>src/App.js</code> and saved to reload!.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          I, Geneva Jacobs, Learned React with Jeff and MSU!
        </a>
      </header>
      <MagicButton />
    </div>
  );
}

export default App;
 