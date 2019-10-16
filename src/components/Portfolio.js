import React from 'react';
import './Portfolio.css';

import * as dndSpellSearcherScreenshot from '../assets/dnd-spell-searcher-screenshot.png';
import * as icanhazdadjokes from '../assets/icanhazdadjokes-screenshot.png';
import * as skaleproject from '../assets/skaleproject.png';
import * as componentLibrary from '../assets/component-library.png';
import * as gameDesignCourse from '../assets/game-design-course.png';
import * as personalWebsite from '../assets/personal-website.png';


const apps = [
    {
        name: "D&D Spell Searcher App",
        url: "http://www.jtmcgoffin.com/dndspellsearcher",
        githubExtension: "dndspellsearcher",
        img: dndSpellSearcherScreenshot,
        description: "Uses the API Dnd5eapi.co",
    },

    {
        name: "I Can Haz Dad Jokes?",
        url: "http://www.jtmcgoffin.com/icanhazdadjokes",
        githubExtension: "rithmchallenge",
        img: icanhazdadjokes,
        description: "Uses the API https://icanhazdadjoke.com/api and a Firebase database to store votes",
    },

    {
        name: "Social Media Style App",
        url: "http://www.jtmcgoffin.com/socialmediaapp",
        githubExtension: "skaleproject",
        img: skaleproject,
        description: "The project I used to first learn React. Uses the API https://randomuser.me/",
    },

    {
        name: "Game Design Coding Course",
        url: "http://www.jtmcgoffin.com/gamedesigncourse",
        githubExtension: "game-design-course-code",
        img: gameDesignCourse,
        description: "My 3-week Game Design Course in Python using Pygame"
    },

    {
        name: "React Component Library",
        url: "http://www.jtmcgoffin.com/reactcomponentlibrary",
        githubExtension: "component-library",
        img: componentLibrary,
        description: "The ever growing library of React Components I've made for various apps and practice."
    },

    {
        name: "This Website",
        url: "http://www.jtmcgoffin.com/",
        githubExtension: "personal-website",
        img: personalWebsite,
        description: "My website and portfolio, built in React"
    },

];

export default function Portfolio() {
    
    const buildPortfolio = apps.map(app => {
        return(
            <div className="app-preview-container" id={"container"+app.name} key={app.name}>
                <h1 className="app-title">{app.name}</h1>
                <div className="app-preview-window" id={"window"+app.name}>
                    <a href={app.url}>
                        <img src={app.img} className="app-preview-img" id={"preview-img"+app.name} alt={app.name} />
                    </a>
                </div>
                <div className="app-preview-desc" id={"preview-desc"+app.name}>
                    <p className="preview-text">{app.description}</p>
                    <div className="preview-github">
                        <a href={"https://github.com/jtmcg/"+app.githubExtension} className="github-link">
                            <img src={require('../assets/github-logo.png')} alt="github logo" className="github-logo" />
                            <p className="github-text">Github Repo</p>
                        </a>
                    </div>
                </div>
            </div>
        )
    })
    return(
        <div className="portfolio-container">
            <div className="portfolio-header">
                <h1>Header Text Placeholder</h1>
            </div>
          {buildPortfolio}
        </div>
    )
}