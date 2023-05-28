import React from "react";
import Header from "./components/common/header";
import "../src/css/index.scss";
import Landing from "./components/landing";
import AboutMe from "./components/aboutMe";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <Header />
      <Landing />
      <AboutMe />
      <Experience/>
      <Projects/>
      <Contact/>
    </>
  );
}

export default App;
