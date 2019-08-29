import React, { useState } from 'react';
 import axios from 'axios' 

 // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route


const SignUp = (props) => {
  const [signi, setSigni] = useState({username: '', password:'', firstName:'', lastName: '', aboutMe:'', email:''})



  const changeHandler = (event) => {
    event.preventDefault();
    setSigni({
        ...signi, [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("within handleSubmit", signi);
    axios.post('https://betterbackend.herokuapp.com/api/auth/register', signi)
      .then(response => {
          console.log(response);
          localStorage.setItem('token', response.data.payload)
          props.history.push('/login')
      })
      .catch(err => console.log("error in handlesSub", err.response))
    setSigni({username: "", password: "", firstName:'', lastName: '', aboutMe:'', email:''})
  };

  return (
    <div className="loginContainer">
      <h1>Welcome Back!</h1>
      <form onSubmit={handleSubmit}>
        <input
            className="username"
            placeholder="enter username"
            type="text"
            value={signi.username}
            name="username"
            onChange={changeHandler}
          />
        <input
            className="password"
            placeholder="enter password"
            type="password"
            value={signi.password}
            name="password"
            onChange={changeHandler}
          />
       <input
            className="firstName"
            placeholder="enter name"
            type="text"
            value={signi.firstName}
            name="firstName"
            onChange={changeHandler}
        />
       <input
            className="lastName"
            placeholder="enter lastname"
            type="text"
            value={signi.lastName}
            name="lastName"
            onChange={changeHandler}
        />
       <input
            className="aboutMe"
            placeholder="about me"
            type="text"
            value={signi.aboutMe}
            name="aboutMe"
            onChange={changeHandler}
        />
       <input
            className="email"
            placeholder="enter email"
            type="email"
            value={signi.email}
            name="email"
            onChange={changeHandler}
        />

        <button type="submit" className="SubmitButton">Connect!</button>
      </form>
    </div>
  )
}

export default SignUp;