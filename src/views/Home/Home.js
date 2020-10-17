import React from 'react';
import HERO_IMG from "../../static/hero.svg";
import './Home.css'

export default () => {
    return (
        <div className="Home">
             <main className="container">
                <h1 className="app-title">Harmonize</h1>
                <p className="lead">Find times to meet with the people you care about.</p>
                <img className="hero-img" src={HERO_IMG} alt="Group scheduling made easy"/>
                <button className="hero-button">Create Poll</button>
            </main>
        </div>
    );
}