// import logo from './logo.svg';
import React from "react";
import './header.scss'
import { Navigate } from "react-router-dom";


function Header() {
  const [gotToProject, setGoToProjects] = React.useState(false)

  if(gotToProject){
    return <Navigate to="/contactForm" />;
  }
  return (
    <div className="main">
      <div className="info">
        <div className="info_content">
            <p className="small">Hello There,</p>
            <h1 className="big">I'm Hopewell</h1>
            <h1 className="big">I am a Mobile and web Developer</h1>
        </div>
        <div className="info_buttons">
            <button onClick={() =>{
              setGoToProjects(true);
              }} 
              className="button">
                Recent Projects
            </button><br/>
            <button className="button">Download Resume</button>
        </div>
      </div>
    </div>

  );
}

export default Header;
