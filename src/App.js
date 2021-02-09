import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 body {
   background-color: #DBF2FF;
 }
 `

function App() {
  return (
    <Router>
      < GlobalStyle />
      <div>
        <Navbar />

        <Switch>

          <Route path='/about'>
            <About />
          </Route>

          <Route path='/Projects'>
            <Projects />
          </Route>

          <Route path='/contact'>
            <Contact />
          </Route>

          <Route path='/'>
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
