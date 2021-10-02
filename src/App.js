import logo from './logo.svg';
import './App.css';

import { FaBomb } from 'react-icons/fa'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Hi, I'm Jack.</h1>
   
        <FaBomb className="App-logo"/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
        <h2>My site will be up soon</h2>
        <h3 className='hey'>For now, check out the links below</h3>
        </p>
        <span className='links'>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/jack-mayer-se/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
