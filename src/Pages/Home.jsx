import React from 'react'
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../Pages/Home.css'
// import Projects from '../Projects/Project';

function Home() {
  return (
    <div id='container'>
      <div className="heading">
        <div className="main-menu">
          <a href="/" id="menu-btns">Home</a>
          <a href="" id="menu-btns">About Me</a>
          <a href="/Projects" id="menu-btns">My Projects</a>
          <a href="" id="menu-btns">Contacts</a>
        </div>
      </div>
      <div id="about">
        <div id="background-img">
          <h1 className="welcome">
            Welcome to my profile
          </h1>
          <button id="about-me">About Me</button>
        </div>
      </div>
    </div>
    
  )
}

// ReactDOM.render(
//   <Router>
//      <Switch>
//         <Route exact path="/" component={Home}/>
//       <Route exact path="/about" component={Projects}/>
//     </Switch>
//   </Router>,
//   document.getElementById('root')
// );

export default Home