import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Message from './components/Message';
import Button  from './components/Button';
import Hello from './components/Hello';
import Employee from './components/Employee';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img class="App-logo" src="https://i.imgur.com/99xqXTF.gif" alt="logo" />
        <p></p>
        <p>
          Edit <code>src/App.js</code> and save to reload. -RedVelasco
        </p>
        <Employee/>
        <Greet name = {Hello()} heroName = "Iron Man">
          <Message/>
        </Greet>
        <Greet name = "Thor" heroName = "God of Thunder"> 
        <Button/>
        </Greet>
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
