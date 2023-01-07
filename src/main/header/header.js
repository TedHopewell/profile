// import logo from './logo.svg';
import React from "react";
import './header.scss'


function Header() {
  

  return (
    <div className="main">
      <div className="info">
        <div className="info_content">
            <p className="small">Hello There,</p>
            <h1 className="big">I'm Hopewell</h1>
            <h1 className="big">I am a Mobile and web Developer</h1>
        </div>
        <div className="info_buttons">
            <button className="button">Recent Projects</button><br/>
            <button className="button">Download Resume</button>
        </div>
      </div>
    </div>

  );
}

export default Header;
