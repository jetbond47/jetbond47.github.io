import * as React from "react";
import "../styles/global.css";
import resume from "../other/resume.pdf";

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <div className="home bg-primary min-h-screen snap-start">
        <h2 className="font-serif text-6xl p-8"> Jetrey <br/> Bond</h2>
      </div>
      <div className="home bg-primary min-h-screen snap-start">
        <h2 className="font-serif text-6xl p-8"> Snap Scroll good?</h2>
      </div>
    </main>
  )
}

export default IndexPage
