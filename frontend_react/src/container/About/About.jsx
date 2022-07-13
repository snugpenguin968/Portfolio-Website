
import React, {useState,useEffect} from 'react'
import './About.scss';
import {motion} from 'framer-motion';
import {images} from '../../constants'
import {AppWrap} from '../../wrapper'
const About = () => {
  return (
    
    <div className="about__header">
      <div className="about__title">
        <h1 className="title">About Me</h1>
      </div>
      <div className="about__image">
      <img src={images.profile} alt="me"></img>
      </div>
      <div className="about__description">
        
        <p>Hi, my name is <span className="my_name">John</span> and I am a rising high school senior. As an aspiring computer science major, I decided to create this obligatory site to showcase everything I have done/am doing. I've taken a dive into many facets of CS including <span className="my_name">data science + ML/AI</span> (my favorite topic), <span className="my_name">web development</span>, and <span className="my_name">competitive programming</span>. I'm trying to get into <span class="my_name">quantum computing</span> soon. Outside of CS, I am interested in Latin, history, and soccer. Feel free to take a look around and hopefully you'll find something interesting! </p>
        <br></br>
        <p>My projects are organized into 2 categories. <span className="my_name">Major projects</span> were created with data science techniques integrated in full-stack websites to tackle a social good issue. They aim to provide full user interactability. <span className="my_name">Minor projects</span> are a brief but in-depth exploration of a specific CS topic. </p>
        <br></br>
        <p>Here are some things that I do in the community: I volunteer for <a href="https://www.steelcitycodes.org" target="_blank">Houston Steel City Codes</a>, I am a teacher for <a href="https://schoolhouse.world/about" target="_blank">Schoolhouse World</a>, I am a club curriculum developer for the <a href="https://joincpi.org" target="_blank">Competitive Programming Initiative</a>, and I am a planning coach for the <a href="https://sites.google.com/view/chs-compsci" target="_blank">Clements High School Computer Science Club</a>.</p>
      </div>
    </div>
    
  )
}

export default AppWrap(About,'about')


