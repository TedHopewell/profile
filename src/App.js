
import './App.scss';
import Projects from './Projects/Project';

function App() {
  return (
    <div className="app">
      <div id="app__works" className="app__container work">
        <div className="app__wrapper app__flex">
          <Projects  ></Projects>
        </div>
      </div>
    </div>

  );
}

export default App;
