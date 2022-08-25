import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Valentina Torres</p>
        <p>E-commerce</p>
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
import NavBar from './components/NavBar'; 

const name = "Talitha Indumentaria"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <h1 style={styles.heading}>Talitha Indumentaria</h1>
        <p>En esta tienda encontrarás el mejor estilo para vos!</p>
        <p className="paragraph">Bienvenido</p>
        <p style={{ color: "blue", fontSize: 28, border: "1px solid black" }}>
          {5 + 9}
        </p>
        <p style={styles.tres}>Tres a Uno</p>
      </div>
    );
  }
}
