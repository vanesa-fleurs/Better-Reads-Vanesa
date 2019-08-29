import React from 'react';

import './App.css';
import { Route, Link } from "react-router-dom";  

//vanesa components
import LoginForm from './components/LoginForm.js'
import Home from './components/Home.js'
import SignupForm from './components/SignupForm.js'
// import UserPage from './components/UserPage.js'
import NavBar from './components/NavBar.js'
import ReccForm from './components/ReccForm.js'

//contexts
// import userContext from './contexts/userContext.js'

//privateRoute
import PrivateRoute from './components/PrivateRoute.js'

function App() {
  

  return (
    <div className="App">
      <NavBar />
      <Route exact path="/home" component={Home} />
      <Route exact path="/signup" component={SignupForm} />
      <Route exact path="/login" component={LoginForm} />
      <PrivateRoute exact path="/protected" component={ReccForm} />
    </div>
  );
}

export default App;
