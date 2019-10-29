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
        url: "http://dndspellsearcher.jtmcgoffin.com/",
        company: "self",
        githubExtension: "dndspellsearcher",
        img: dndSpellSearcherScreenshot,
        description: "A Web App built in React to filter spells from Dungeons and Dragons 5th edition. You may filter spells by class, level, and type. It uses the API Dnd5eapi.co",
    },

    {
        name: "I Can Haz Dad Jokes?",
        url: "http://icanhazdadjokes.jtmcgoffin.com/",
        company: "self",
        githubExtension: "rithmchallenge",
        img: icanhazdadjokes,
        description: "A Web App built in React that displays random jokes from the API https://icanhazdadjoke.com/api. It utilizes a Firebase database to store likes and dislikes voted on each joke, and displays the highest and lowest rated jokes.",
    },

    {
        name: "Social Media Style App",
        url: "http://socialmediaapp.jtmcgoffin.com/",
        company: "self",
        githubExtension: "skaleproject",
        img: skaleproject,
        description: "The project I used to first learn React. It emulates a simple social media feed by calling up random users from the API https://randomuser.me/. I also experimented with page rendering here. If you click on a random user, it displays a simple \"portfolio\" for that user.",
    },

    {
        name: "React Component Library",
        url: "http://reactcomponentlibrary.jtmcgoffin.com/",
        company: "self",
        githubExtension: "component-library",
        img: componentLibrary,
        description: "The ever growing library of React Components I've made for various apps and practice. I do my best to keep it up to date."
    },

    {
        name: "This Website",
        url: "http://www.jtmcgoffin.com/",
        company: "self",
        githubExtension: "personal-website",
        img: personalWebsite,
        description: "This website/portfolio you are perusing now was built by me in React."
    },

];

const games = [
    {
        name: "Interregnum - a Tabletop Space Epic",
        url: "https://www.interregnumbg.com",
        company: "Designed by J. Tyler McGoffin",
        img: interregnum,
        description: "The board game I'm currently designing: a 4X Space Epic with a Deck-building sub-theme."
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
        url: "https://summerinstitutes.spcs.stanford.edu/courses/2019/game-design",
        company: "self",
        githubExtension: "game-design-course-code",
        img: gameDesignCourse,
        description: "My 3-week Game Design Course in Python using Pygame. Most recently, I have taught this course for Stanford's PreCollegiate Studies - both on Stanford's campus and abroad."
    },
]

const headerText = {
    headerTitle: "Web Apps, Games, and More...",
    headerText: <React.Fragment>Below is a sample of various projects I have completed. To see more information about the project, or to see it in action, click on the image. All code samples are available on my github page: <a href="https://www.github.com/jtmcg" target="_blank" rel="noopener noreferrer">https://www.github.com/jtmcg</a></React.Fragment>,
}

export default function Portfolio() {

    return(
        <div className="portfolio-container">
            <div className="portfolio-header">
                <h1 className="portfolio-header-title">{headerText.headerTitle}</h1>
                <p className="portfolio-header-text">{headerText.headerText}</p>
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
                        <a href={"https://github.com/jtmcg/"+project.githubExtension} target="_blank" rel="noopener noreferrer" className="github-link">
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
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
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