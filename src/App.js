import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';

import Header from './components/Header'
import Navbar  from './components/Navbar';
import Home from './components/Home'
import Footer from './components/Footer'
import Cooking from './components/Cooking'
import CookingForms from './components/CookingForms'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <div id='Main'>
          <Switch>
            <Redirect exact path='/' to='/home'></Redirect>
            <Route path='/home'><Home /></Route>
            <Route path='/cooking'><Cooking /></Route>
            <Route path='/cookingforms'><CookingForms /></Route>
            
          </Switch>
        </div>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
