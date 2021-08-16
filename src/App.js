import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Senario from './components/Senario';
import Game from './components/Game';
import GameControl from './components/GameControl';
import GodVisionSenario from './components/GodVisionSenario';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/senario' component={ Senario } />
        <Route path='/god-vision' component={ GodVisionSenario } />
        <Route path='/game-control' component={ GameControl } />
        <Route path='/game' component={ Game } />
        <Route path='/' component={ Home } exact />
      </Switch>
    </Router>
  );
}

export default App;
