import React from 'react';
import './Skills.css'

const skillsData = [
    {"title": "Design", 
      "list": [
        { "name": "Game Design", "img": require("../assets/skills/gamedesign.png")},
        { "name": "App Design", "img": require("../assets/skills/appdesign.png")},
        { "name": "UI/UX Design", "img": require("../assets/skills/UIUX.png")},
        { "name": "Storyboarding", "img": require("../assets/skills/storyboarding.png")},
        { "name": "Concepting", "img": require("../assets/skills/concepting.png")},
        { "name": "Wireframing", "img": require("../assets/skills/wireframing.png")},
        { "name": "Media/Video", "img": require("../assets/skills/mediaandvideo.png")},
    ]},
    {"title": "Development/Code",
     "list": [
        { "name": "HTML/CSS/JavaScript", "img": require("../assets/skills/front-end.png")},
        { "name": "Python", "img": require("../assets/skills/python.png")},
        { "name": "C#", "img": require("../assets/skills/csharp.png")},
        { "name": "Github", "img": require("../assets/skills/github.png")},
        { "name": "SQL", "img": require("../assets/skills/sql.png")},
        { "name": "Heroku", "img": require("../assets/skills/heroku.png")},
        { "name": "Firebase", "img": require("../assets/skills/firebase.png")},
    ]},
    {"title": "Framworks/Packages",
     "list": [
        { "name": "React (Node.js)", "img": require("../assets/skills/react.png")},
        { "name": "Bootstrap (HTML/CSS)", "img": require("../assets/skills/bootstrap.png")},
        { "name": "Pygame (Python)", "img": require("../assets/skills/pygame.png")},
        { "name": "Unity (C#)", "img": require("../assets/skills/unity.png")},
    ]},
    {"title": "Tools/Software",
     "list": [
        { "name": "Photoshop", "img": require("../assets/skills/photoshop.png")},
        { "name": "Illustrator", "img": require("../assets/skills/illustrator.png")},
        { "name": "Jupyter (Python)", "img": require("../assets/skills/jupyter.png")},
        { "name": "G-Suite", "img": require("../assets/skills/gsuite.png")},
        { "name": "MS Office", "img": require("../assets/skills/msoffice.png")},
        { "name": "Slack", "img": require("../assets/skills/slack.png")},
        { "name": "Trello", "img": require("../assets/skills/trello.png")},
        { "name": "Filmora", "img": require("../assets/skills/filmora.png")},
    ]},
]

export default function Skills(props) {
    
    const buildSkillsPage = skillsData.map(skillSet => {
        const title = skillSet.title;
        const list = skillSet.list;
        return (
            <div className="skill-container" key={title}>
                <h1 className="skill-type">{title}</h1>
                <div className="skill-list-container">
                    <SkillList
                        list={list}
                        key={title+"-list"}
                    />
                </div>
            </div>
        )
    });

    return (
        <div className="skills-page-container">
            {buildSkillsPage}
        </div>
    )
}


function SkillList(props) {
    const skills = props.list;

    const buildSkillList = skills.map(skill => {
        const img = skill.img;
        const name = skill.name;
        return (
            <div className="skill-entry" key={name}>
                <img src={img} alt={name} className="skill-img"/>
            </div>
        )
    })
    return(
        <React.Fragment>
            {buildSkillList}
        </React.Fragment>
    )
}