import React from 'react';
import HERO_IMG from "../../static/hero.svg";
import './Home.css'

import { Link } from 'react-router-dom';

export default () => {
    return (
        <div className="Home">
             <main className="container">
                <h1 className="app-title">Harmonize</h1>
                <p className="lead">Find times to meet with the people you care about.</p>
                <img className="hero-img" src={HERO_IMG} alt="Group scheduling made easy"/>
                <Link to={'/create'} className="hero-button">Create Poll</Link>
            </main>
        </div>
    );
}