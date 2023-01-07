import Projects from '../Projects/Project';
import Main from '../main/main';


function App() {
  return (
    <div className="home-page">
      <div id="app__works" className="app__container work">
        <div className="app__wrapper app__flex">
          <Main></Main>
          <Projects /> 
        </div>
      </div>
    </div>

  );
}

export default App;
