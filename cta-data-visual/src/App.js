import React from 'react';
import './App.css';
import MainAppBar from './components/MainAppBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Avgwdriders from './pages/Dataview/Avgwdriders/Avgwdriders';
import Avgweshriders from './pages/Dataview/Avgweshriders/Avgweshriders';
import Avgwesriders from './pages/Dataview/Avgwesriders/Avgwesriders';
import Monthridersstation from './pages/Dataview/Monthridersstation/Monthridersstation';

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
