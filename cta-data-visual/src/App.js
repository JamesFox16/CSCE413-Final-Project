import React from 'react';
import './App.css';
import MainAppBar from './components/MainAppBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Avgwdriders from './pages/Dataview/Avgwdriders/Avgwdriders';
import Avgweshriders from './pages/Dataview/Avgweshriders/Avgweshriders';
import Avgwesriders from './pages/Dataview/Avgwesriders/Avgwesriders';
import Monthridersstation from './pages/Dataview/Monthridersstation/Monthridersstation';
import About from './pages/About/About';
import LinesMap from './pages/LinesMap/LinesMap';
import Totalriders from './pages/Dataview/TotalRiders/Totalriders';
import Dailyriders from './pages/Dataview/Dailyriders/Dailyriders';

function App() {
  return (
    <div className="App">
      <MainAppBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/avgwdriders" component={Avgwdriders} />
          <Route path="/avgweshriders" component={Avgweshriders} />
          <Route path="/avgwesriders" component={Avgwesriders} />
          <Route path="/monthridersstation" component={Monthridersstation} />
          <Route path="/about" component={About} />
          <Route path="/linesmap" component={LinesMap} />
          <Route path="/totalriders" component={Totalriders} />
          <Route path="/dailyriders" component={Dailyriders} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
