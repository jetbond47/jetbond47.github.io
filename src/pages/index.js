import * as React from "react";
import "../styles/global.css";
import resume from "../other/resume.pdf";

// markup
const IndexPage = () => {
  return (
    <main className="font-serif">
      <title>Home Page</title>
      <div className="fixed w-full p-3"><a href="#home">Home</a></div>
      <div id="home" className="home bg-primary min-h-screen snap-start p-12">
        <h2 className="text-6xl pb-8"> Jetrey <br/> Bond</h2>
        <div className="pb-4 text-lg"><a href="#experience">Fullstack Software Developer</a></div>
        <div className="pb-4 text-lg"><a href="#problemSolver">Problem Solver</a></div>
        <div className="pb-4 text-lg "><a href="#hockeyApi">Hockey Enjoyer</a></div>
        <a href={resume} download>
          <button className="transition duration-500 ease-in-out bg-secondary hover:bg-neutral transform hover:-translate-y-1 hover:scale-110 pl-5 pr-5 pb-2 pt-2 rounded-lg " href={resume} download>Download Résumé</button>
        </a>
        <svg className="animate-bounce w-24 h-24 text-neutral p-4 absolute bottom-0 left-4" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"></path>
        </svg>
      </div>
      <div id="experience" className="home bg-primary min-h-screen snap-start p-12">
        <h2 className="text-6xl p-8">Experience here</h2>
      </div>
      <div id="problemSolver" className="home bg-primary min-h-screen snap-start p-12">
        <h2 className="text-6xl p-8">My Programming Philosophy</h2>
      </div>
      <div id="hockeyApi" className="home bg-primary min-h-screen snap-start p-12">
        <h2 className="text-6xl p-8">Gonna write that Hockey API thing</h2>
      </div>
    </main>
  )
}

export default IndexPage
