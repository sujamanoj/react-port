import React from "react";
import Project from "../Project";

function Gallery() {
  const Projects = [
    {
      name: "Portfolio",
      description: "This is  the first challenge.",

      technologies: ["JavaScript"],
      github: "https://github.com/sujamanoj/portfolio",
      deployed: "https://sujamanoj.github.io/portfolio/",
    },
    {
      name: "Workday-Scheduler",
      description:
        "An application that allows you to easily track your work day.",

      technologies: ["JavaScript", "Node.js", "Express"],
      github: "https://github.com/sujamanoj/Workday-Scheduler",
      deployed: "https://sujamanoj.github.io/Workday-Scheduler/",
    },
    {
      name: "Selling Later",
      description:
        "This project is a full stack developer project. this is a website for realtos",

      technologies: ["JavaScript", "MYSQL", "JawsDB", "Node.js", "Express"],
      github: "https://github.com/clickity-clacking/selling-later",
      deployed: "https://tranquil-tundra-77123.herokuapp.com/",
    },
    {
      name: "New-code-quiz-generator",
      description:
        "A CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well.",

      technologies: ["JavaScript"],
      github: "https://github.com/sujamanoj/new-code-quiz-generator",
      deployed: "https://sujamanoj.github.io/new-code-quiz-generator/",
    },
    {
      name: "Notetaker",
      description: "this is a Note Take app",

      technologies: [
        "JavaScript",
        "MYSQL",
        "JawsDB",
        "Node.js",
        "Express",
        "heroku",
      ],
      github: "https://github.com/sujamanoj/notetaker",
      deployed: "https://sujnotetaker.herokuapp.com/notes",
    },
    {
      name: "Password Generator",
      description:
        "This is an application that allows you to generate a password from 8 to 128 characters based on criteria you select.",

      technologies: ["HTML/CSS", "JavaScript"],
      github: "https://github.com/sujamanoj/MY-FIRST-PASSWORD-GENERATOR",
      deployed: "https://sujamanoj.github.io/MY-FIRST-PASSWORD-GENERATOR/",
    },
  ];

  return (
    <section>
      <div className="center">
        <h1 className="page-header">My Portfolio</h1>
      </div>
      <div>
        <ul className="flex-row mobile-row">
          <li>
            <Project projects={Projects[0]}></Project>
          </li>
          <li>
            <Project projects={Projects[1]}></Project>
          </li>
        </ul>
        <ul className="flex-row mobile-row">
          <li>
            <Project projects={Projects[2]}></Project>
          </li>
          <li>
            <Project projects={Projects[3]}></Project>
          </li>
        </ul>
        <ul className="flex-row mobile-row">
          <li>
            <Project projects={Projects[4]}></Project>
          </li>
          <li>
            <Project projects={Projects[5]}></Project>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Gallery;
