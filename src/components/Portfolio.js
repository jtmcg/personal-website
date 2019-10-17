import React from 'react';
import './Portfolio.css';

import * as dndSpellSearcherScreenshot from '../assets/dnd-spell-searcher-screenshot.png';
import * as icanhazdadjokes from '../assets/icanhazdadjokes-screenshot.png';
import * as skaleproject from '../assets/skaleproject.png';
import * as componentLibrary from '../assets/component-library.png';
import * as gameDesignCourse from '../assets/game-design-course.png';
import * as personalWebsite from '../assets/personal-website.png';
import * as interregnum from '../assets/interregnum.png';
import * as exodus from '../assets/exodus.png';
import * as rktc from '../assets/rktc.png';


const reactApps = [
    {
        name: "D&D Spell Searcher App",
        url: "http://www.jtmcgoffin.com/dndspellsearcher",
        company: "self",
        githubExtension: "dndspellsearcher",
        img: dndSpellSearcherScreenshot,
        description: "Uses the API Dnd5eapi.co",
    },

    {
        name: "I Can Haz Dad Jokes?",
        url: "http://www.jtmcgoffin.com/icanhazdadjokes",
        company: "self",
        githubExtension: "rithmchallenge",
        img: icanhazdadjokes,
        description: "Uses the API https://icanhazdadjoke.com/api and a Firebase database to store votes",
    },

    {
        name: "Social Media Style App",
        url: "http://www.jtmcgoffin.com/socialmediaapp",
        company: "self",
        githubExtension: "skaleproject",
        img: skaleproject,
        description: "The project I used to first learn React. Uses the API https://randomuser.me/",
    },

    {
        name: "React Component Library",
        url: "http://www.jtmcgoffin.com/reactcomponentlibrary",
        company: "self",
        githubExtension: "component-library",
        img: componentLibrary,
        description: "The ever growing library of React Components I've made for various apps and practice."
    },

    {
        name: "This Website",
        url: "http://www.jtmcgoffin.com/",
        company: "self",
        githubExtension: "personal-website",
        img: personalWebsite,
        description: "My website and portfolio, built in React"
    },

];

const games = [
    {
        name: "Interregnum - a Tabletop Space Epic",
        url: "https://www.interregnumbg.com",
        company: "Designed by J. Tyler McGoffin",
        img: interregnum,
        description: "The game I'm currently designing: a 4X Space Epic with a Deck-building sub-theme."
    },
    
    {
        name: "Exodus: Proxima Centauri - the Digital Edition",
        url: "https://store.steampowered.com/app/892440/Exodus_Proxima_Centauri/",
        company: "Offworld Games",
        img: exodus,
        description: "The digital adaptation of NSKN's Exodus: Proxima Centauri. I was the Game Designer and UI/UX Designer during the project, and worked on marketing and web management.",
    },

    {
        name: "Reiner Knizia's the Confrontation: Variant Mode DLC",
        url: "https://store.steampowered.com/app/549830/Reiner_Knizias_The_Confrontation__Variant_Mode_DLC/",
        company: "Offworld Games",
        img: rktc,
        description: "I came aboard just before launch of this game and primarilly assisted with marketing and web presence, though I did contribute to some of the design in the character descriptions for the bestiary.",
    }
];

const education = [
    {
        name: "Game Design Coding Course",
        url: "http://www.jtmcgoffin.com/gamedesigncourse",
        company: "self",
        githubExtension: "game-design-course-code",
        img: gameDesignCourse,
        description: "My 3-week Game Design Course in Python using Pygame"
    },
]

export default function Portfolio() {
    
    // const buildPortApps = reactApps.map(app => {
    //     return(
    //         <div className="app-preview-container" id={"container"+app.name} key={app.name}>
    //             <h1 className="app-title">{app.name}</h1>
    //             <div className="app-preview-window" id={"window"+app.name}>
    //                 <a href={app.url}>
    //                     <img src={app.img} className="app-preview-img" id={"preview-img"+app.name} alt={app.name} />
    //                 </a>
    //             </div>
    //             <div className="app-preview-desc" id={"preview-desc"+app.name}>
    //                 <p className="preview-text">{app.description}</p>
    //                 <div className="preview-github">
    //                     <a href={"https://github.com/jtmcg/"+app.githubExtension} className="github-link">
    //                         <img src={require('../assets/github-logo.png')} alt="github logo" className="github-logo" />
    //                         <p className="github-text">Github Repo</p>
    //                     </a>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // });

    // const buildPortGames = games.map(game => {
    //     return(
    //         <div className="app-preview-container" id={"container"+game.name} key={game.name}>
    //             <h1 className="app-title">{game.name}</h1>
    //             <div className="app-preview-window" id={"window"+game.name}>
    //                 <a href={game.url}>
    //                     <img src={game.img} className="app-preview-img" id={"preview-img"+game.name} alt={game.name} />
    //                 </a>
    //             </div>
    //             <div className="app-preview-desc" id={"preview-desc"+game.name}>
    //                 <p className="preview-text">{game.description}</p>
    //                 <div className="preview-company">
    //                     <h3>{game.company}</h3>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // });

    return(
        <div className="portfolio-container">
            <div className="portfolio-header">
                <h1 className="portfolio-header-text">Header Text Placeholder</h1>
            </div>
          <h1 className="portfolio-section-header">Web and React Apps</h1>
          {buildPortComponents(reactApps)}
          <h1 className="portfolio-section-header">Games</h1>
          {buildPortComponents(games)}
          <h1 className="portfolio-section-header">Education</h1>
          {buildPortComponents(education)}
        </div>
    )
}

const buildPortComponents = (projects) => {
    
    const buildPort = projects.map(project => {

        var github = null;

        if (project.githubExtension) {
            github = () => {
                return(
                    <div className="preview-github">
                        <a href={"https://github.com/jtmcg/"+project.githubExtension} className="github-link">
                            <img src={require('../assets/github-logo.png')} alt="github logo" className="github-logo" />
                            <p className="github-text">Github Repo</p>
                        </a>
                    </div>
                );
            }    
        } else {
            github = () => {return null};
        }

        return(
            <div className="app-preview-container" id={"container"+project.name} key={project.name}>
                <h1 className="app-title">{project.name}</h1>
                <div className="app-preview-window" id={"window"+project.name}>
                    <a href={project.url}>
                        <img src={project.img} className="app-preview-img" id={"preview-img"+project.name} alt={project.name} />
                    </a>
                </div>
                <div className="app-preview-desc" id={"preview-desc"+project.name}>
                    <p className="preview-text">{project.description}</p>
                    {github()}
                </div>
            </div>
        )
    });

    return buildPort;
}