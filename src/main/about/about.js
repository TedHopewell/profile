// import logo from './logo.svg';
import React from "react";
import './about.scss'

const skills =['HTML5','CSS3','React JS','React Native','SQL','Git','Figma','JavaScript','Firebase','Python']

function About() {
  return (
    <div className="about">
      <div className="heading">
        <h2>About</h2>
        <h1>Get To Know Me</h1>
      </div>
      <div className="about_info">
        <div className="about_bio">
          <h1>Hello There,</h1>
          <p>Hi, my name is Hopewell! I am a Mobile and Web developer
            with extensive experience in UI/UX design. In short, 
            I create websites that help organizations and indivuduals meet their
             business challenges and meet their needs. <br></br><br></br>
             I manage everything from site navigation and layout
              to web hosting and corporate security architecture. 
              My expertise is in front-end web applications and 
              the main languages ​​in my technology are JavaScript, 
              React and of course HTML/CSS. I'm a lifelong learner 
              ,I'm currently navigating to backend development using Firebase Firestore, AWS Amplify and MERN stack.
          </p>
        </div>
        <div className="about_skills">
          <h1>Skills</h1>
          <div className="skills">
           
              <div className="skills_container">
                <p>React JS</p>
              </div>
              <div className="skills_container">
              <p>React </p>
            </div>
            <div className="skills_container">
              <p>Javascript </p>
            </div>
            <div className="skills_container">
              <p>Java </p>
            </div>
            <div className="skills_container">
              <p>PHP </p>
            </div>
            <div className="skills_container">
              <p>Firebase</p>
            </div>
            <div className="skills_container">
              <p>Github</p>
            </div>
            <div className="skills_container">
              <p>Node JS</p>
            </div>
            <div className="skills_container">
              <p>MERN </p>
            </div>
            <div className="skills_container">
              <p>Figma </p>
            </div>
            <div className="skills_container">
              <p>Canva </p>
            </div>
            <div className="skills_container">
              <p>Wordpress </p>
            </div>
          
         
          </div>
          
        </div>
      </div>
    </div>

  );
}

export default About;
