import React from 'react';
import { Route, Redirect } from 'react-router';

const PrivateRoute = (props) => {
    console.log("in PR", props)

    const Component = props.component 

    console.log("Componenet in PR", Component)

    const send = props.sendData
    console.log("in send", send)
    return(
        <Route {...props} render={ prop => {
            if(localStorage.getItem('token')) {
                return <Component {...prop} sendData={send}/>
            } 
            else {
                return <Redirect to="/Home" />
            }
            }}  
        />
  
    )
}

export default PrivateRoute

// {component: Component, ...rest}