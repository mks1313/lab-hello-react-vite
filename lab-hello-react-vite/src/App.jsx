import "./App.css";
import ironhackLogo from "./assets/ironhack-logo.png";
import menuTop from "./assets/menu-top.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";

function App() {
  return (
    <div className="App">
      <div className="cabeza">
        <header>
          <div className="logo-container">
            <img className="logo" src={ironhackLogo} alt="Ironhack Logo" />
          </div>
          <div className="menu-container">
            <img className="menu" src={menuTop} alt="Menu Top" />
          </div>
        </header>

        <h1 id="ah">Say hello to ReactJS</h1>
        <p className="par">
          You will learn how to use the most popular front-end library, and
          become a super Ninja developer.
        </p>
        <button>Awesome!</button>
      </div>
      <div className="icon-container">
        <div className="icon-item">
          <img src={icon2} alt="Icon 2" />
          <p className="small-text">Declarative</p>
          <p className="icon-description">
            React makes it painless to create interactive UIs.
          </p>
        </div>
        <div className="icon-item">
          <img src={icon4} alt="Icon 4" />
          <p className="small-text">Components</p>
          <p className="icon-description">
            Build encapsulated components that manage their state.
          </p>
        </div>
        <div className="icon-item">
          <img src={icon3} alt="Icon 3" />
          <p className="small-text">Single-Way</p>
          <p className="icon-description">
            A set of immutable values is passed to the components.
          </p>
        </div>
        <div className="icon-item">
          <img src={icon1} alt="Icon 1" />
          <p className="small-text">JSX</p>
          <p className="icon-description">
            Statically-typed designed to run on modern browsers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
