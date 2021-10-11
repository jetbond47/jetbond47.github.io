import * as React from "react";
import "../styles/global.css";
import me from "../images/me.jpg";
import resume from "../other/resume.pdf";

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h2 className="font-serif text-6xl p-8 bg-primary"> Jetrey Bond</h2>
      <div className="font-serif grid grid-cols-1 md:grid-cols-3 gap-4 bg-gradient-to-br from-secondary via-tertiary to-neutral">
        <div className="p-4 lg:min-h-screen col-span-2">
          <h3 className="text-4xl pb-4 text-center md:text-left">About me</h3>
          <div className="flex flex-wrap md:flex-nowrap">
            <img className="rounded-full h-64 w-64 justify-center md:justify-start m-auto md:m-0 p-4" src={me} alt="me"/>
            <p className="text-center md:text-left">
              This is me, a full-stack engineer!
              <br/>
              I believe what makes a great programmer is the ability to apply concepts in any framework or language.
              <br/>
              My current skillset include: Javascript, Jquery, CSS, HTML, Node, Angular, Handlebars, Twig, AWS, GraphQL.
              <br/>
              However, I am always open to learning new skillsets, like React, Tailwind, and Gatsby in creating this website.
            </p>
          </div>
        </div>
        <div className="font-serif p-4 max-w-4xl lg:min-h-screen text-center md:text-left">
          <h3 className="text-4xl pb-4">This is my sidebar</h3>
          <div className="pb-5">
            If you would like a copy of my Résumé, please:
          </div>
          <a className="pl-5 pr-5 pb-2 pt-2 bg-primary rounded-lg" href={resume} download>Click here</a>
          <div className="pt-5">
            This is where I'd put my projects... IF I HAD ANY
          </div>
        </div>
      </div>

      
    </main>
  )
}

export default IndexPage
