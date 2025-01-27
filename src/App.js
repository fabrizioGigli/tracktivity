import "./App.css";
import HeaderBar from "./components/Header";
import Navbar from "./components/NavBar";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderBar />
      </header>
      <body className="App-body">
        <Navbar />
        <Main />
      </body>
      <footer className="App-footer">
        <div>altro</div>
      </footer>
    </div>
  );
}

export default App;
