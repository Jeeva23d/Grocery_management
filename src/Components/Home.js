import React from "react";
import Nav from './Nav';
import Slide from './Slide-Home'
import Imgcontent from "./Home-Content";
import Feedback from "./Feedback";
import About from './About'

export default function Home(){
    return(
        <>
        <Nav />
        <Imgcontent/>
        <Slide/>
        <Feedback/>
        <About />
        </>
    )
}