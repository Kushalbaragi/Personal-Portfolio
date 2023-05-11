import React from "react";
import Header from './components/common/header';
import '../src/css/index.scss';
import Landing from "./components/landing";
import AboutMe from "./components/aboutMe";

function App(){
    return(
        <>
        <Header />
        <Landing />
        <hr/>

        <AboutMe/>
        <hr/>

        <AboutMe/>
        <hr/>


        </>
    )
}

export default App;