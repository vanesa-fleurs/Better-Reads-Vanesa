import React, { useState } from 'react'

import './App.css';
import { Route } from "react-router-dom";  

//vanesa components
import LoginForm from './components/LoginForm.js'
import Home from './components/Home.js'
import SignupForm from './components/SignupForm.js'
// import UserPage from './components/UserPage.js'
import NavBar from './components/NavBar.js'
import ReccForm from './components/ReccForm.js'
import UserSugg from './components/UserSugg.js'


//contexts
// import userContext from './contexts/userContext.js'

//privateRoute
// import PrivateRoute from './components/PrivateRoute.js'

function App() {
  const [books, setBooks] = useState([])
  const sendData = (data) => {
    setBooks(data)
  }

  return (
    <div className="App">
      <NavBar />
      <Route exact path="/home" component={Home} />
      <Route exact path="/signup" component={SignupForm} />
      <Route exact path="/login" component={LoginForm} />
      {/* <PrivateRoute exact path="/protected" component={ReccForm} sendData={sendData}/> */}


      <Route exact path="/userbooks" render={props => <UserSugg {...props} books={books}/>

      } />

      {/* <PrivateRoute exact path="/userbooks" component={props=> <UserBooks {...props}
                    books={books}
          />}
      /> */}

      <Route exact path="/protected"  render={props => <ReccForm {...props} 
                                            sendData={sendData}/> 
      }/>


    </div>
  );
}
export default App;
