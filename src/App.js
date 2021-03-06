import "./App.css";
import logo from "./logo-yap-dictionary.png";
import Dictionary from "./Dictionary.js";
import "./Dictionary.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>

        <footer className="text-center">
          <small>
            Coded by Lysanne Yap | Open-sourced on{" "}
            <a
              href="https://github.com/lysanney/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
