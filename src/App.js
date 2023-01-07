import { React} from 'react';
import './App.scss';
import Home from './Pages/Home';
import TestPage from './main/about/testPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from './Projects/Project';


export default function App() {
  return (
    <div className="app">
      <div id="app__works" className="app__container work">
        <div className="app__wrapper app__flex">
          <Home />

          <BrowserRouter>
                <Routes>
                  <Route path="/" element={<TestPage />}>
                    <Route path="/" element={<Home />} />
                    <Route path="testPage" element={<TestPage />} />
                    <Route path="Project" element={<Projects /> } />
                  </Route>
                </Routes>
          </BrowserRouter>
        </div>
        
      </div>
    </div>

  );
}




