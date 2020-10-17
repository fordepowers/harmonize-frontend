import React from 'react';
import './App.css';
import HERO_IMG from "./static/hero.svg";

function App() {
  return (
    <div className="App">
      <main className="container">
        <h1 className="app-title">Harmonize</h1>
        <p className="lead">Find times to meet with the people you care about.</p>
        <img className="hero-img" src={HERO_IMG} alt="Group scheduling made easy"/>
        <button className="hero-button">Create Poll</button>
      </main>
    </div>
  );
}

export default App;
