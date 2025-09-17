
import Main from '../main/main';
import React from 'react';
import '../App.scss';
import Projects from '../Projects/Project';
import ContactForm from '../contactSection/contactForm';
import AppModal from '../modal/appmodal';



function Home() {
  
  return (
    <div className="app">
      <div id="app__works" className="app__container work">
        <div className="app__wrapper app__flex">
           <Main />
           <Projects />
           <ContactForm />
        </div>
      </div>
    </div>

  );
}

export default Home;
