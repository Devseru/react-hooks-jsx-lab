import React from "react";
import ReactDOM from "react-dom/client";

const name = "Liza";
const city = "New York";
const image = "https://i.imgur.com/mV8PQxj.gif";


function NavBar() {
  return (
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1 style={{ color: "firebrick" }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Here is some info about me!</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
