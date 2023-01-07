// import logo from './logo.svg';
import React from "react";
import './contactForm.scss'
import '../Projects/Project.scss'
import Contact from "../Contact/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";


function ContactForm() {
  return (
    <div>
          <div className="main_contact">
            <div id="contacts">
              <h2>Contact Me</h2>  
              <Contact/>
            </div>
            <div id="main_form">
              <div id='left-side'>
                    <input placeholder="Employer's name" id="name"></input><br></br>
                    <input placeholder="Employer's email" id="name"></input><br></br>
                    <input placeholder="Employer's phone" id="name"></input><br></br>
                    <input placeholder="Interview Detatils" id="message"></input><br></br>

                    <button id="submit-btn">Submit</button><br></br>
              </div>
              
              <div id='right-side'>
                <h2>Cover Letter</h2><br></br>
          
                <div id="cover-letter">
                  Hopewell Maome<br></br><br></br>
                  React Developer<br></br><br></br>
                  Johannnesburg, GP 2041<br></br><br></br>
                  hopewellmaome@gmail.com<br></br><br></br>

                  RE: Enthusiastic and Hard-Working Software Developer<br></br><br></br>
                  Dear Director of Human Resources,<br></br><br></br>

                  Please accept this letter as an expression of my interest in the Software Developer position.<br></br>
                  I am a highly motivated and progress-focused Full Stack Web Multiplatform Mobile App Developer with over 12 months experience in this industry.<br></br>
                  Throughout the course of my career, I have been perfecting my virtualization and software development abilities.<br></br>
                  I am a capable and consistent problem-solver skilled at prioritizing and managing my projects with proficiency.<br></br> 
                  In my previous role, I contributed communication, interpersonal, and business analysis toward team efforts and business improvements.<br></br> 
                  I am progressive minded and in tune with new developments in my field. I have proven to be effective and collaborative with strong teamwork talents.<br></br> 
                  I enjoy collective brainstorming sessions where we all coordinate activities to achieve a common goal.<br></br>
                  Please take a moment to review my attached resume and credentials. I would greatly appreciate the opportunity to speak with you regarding my candidacy.<br></br><br></br> 
                  Thank you for your consideration.<br></br><br></br>

                  Sincerely,<br></br>
                  Mr. Hopewell Maome<br></br>

                </div>
              </div>
            </div>
      
          </div>
            <div id="footer">
              <p style={{display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center',paddingTop:'50px',fontSize:'14px'}}>
                <div style={{paddingBottom:'100px'}}>
                  <h4 style={{fontWeight:'lighter'}}>
                    Email:<span style={{paddingRight:'5px'}}><FontAwesomeIcon icon={faEnvelope} style={{paddingLeft:'10px'}} /></span>
                    hopewellmaome@gmail.com
                  </h4><br></br>
                  <h4 style={{fontWeight:'lighter'}}>
                    Phone:<span style={{paddingRight:'5px'}}><FontAwesomeIcon icon={faPhone} style={{paddingLeft:'5px'}} /></span>
                    0672722080 / 0656683604
                  </h4><br></br>
                  <h4 style={{fontWeight:'lighter'}}>
                    gitHub:<span style={{paddingRight:'5px'}}></span>
                    <a href="https://github.com/TedHopewell">https://github.com/TedHopewell</a>
                  </h4><br></br>
                  <h4 style={{fontWeight:'lighter'}}>
                    Linkedin:<span style={{paddingRight:'5px'}}></span>
                    <a href="https://www.linkedin.com/in/molebaleng-hopewell-maome-242814aa/">https://www.linkedin.com/in/molebaleng-hopewell-maome-242814aa/</a>
                  </h4><br></br>
                  <h4 style={{fontWeight:'lighter'}}>
                    Website built by:<span style={{paddingRight:'5px'}}> Hopewell Maome</span>
                  </h4>
                  
                 
                </div>
                Copyrights &copy; Hopewell Maome

              </p>
            </div>
  </div>

  );
}

export default ContactForm;
