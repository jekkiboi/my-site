import logo from './logo.svg';
import './App.css';

import { FaBomb } from 'react-icons/fa'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FaBomb className="App-logo"/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Jack Mayer PortFolio Coming Soon
        </p>
        <span>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/jack-mayer-se/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        &nbsp;&nbsp; &nbsp;&nbsp;
        <a
          className="App-link"
          href="https://github.com/jekkiboi"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        </span>
      </header>
    </div>
  );
}

export default App;
