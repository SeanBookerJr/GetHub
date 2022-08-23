import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login({user, setUser}) {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    let navigate = useNavigate(); 

  //   const renderErrorMessage = (name) =>
  // name === errorMessages.name && (
  //   <div className="error">{errorMessages.message}</div>
  // );

  function handleLoginClick(event){
      navigate('./Profile')
  }

  function handleSignUpClick(event){
      navigate('./Signup')
  }

  const handleLogin = (event) => {
    event.preventDefault();
    
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    .then(res => {
      if (res.ok) {
        res.json()
        .then(data => {
          console.log(data)
          setErrorMessages('')
          setUser(data)
        })
      } else {
        res.json()
        .then(({errorMessages}) => setErrorMessages(errorMessages))
      }
    })
      
    
  };

  const handleUsernameChange = e => setUsername(e.target.value)
  const handlePasswordChange = e => setPassword(e.target.value)

  if (user.id) {
    return (
      <div>
        Already logged in
      </div>
    )
  }

    return (
        // logo

        <div className="login-card">
            <form onSubmit={handleLogin}>
                <h2>LOGIN/SIGN UP</h2>
                <div className="input-container-username">
                    <label>Username </label>
                  <br />
                  <br />
                    <input value={username} onChange={handleUsernameChange} id="username" type="text" placeholder="USERNAME" name="uname" required />
                        {/* {renderErrorMessage("uname")} */}
       </div>
       <div className="input-container-password">
            <label>Password </label>
            <br />
            <br />
                <input value={password} onChange={handlePasswordChange} id="password" type="password" placeholder="PASSWORD" name="pass" required />
                    {/* {renderErrorMessage("pass")} */}
       </div>
       <div className="button-container">
         <button className="button" type="submit" onClick={handleLoginClick}>LOGIN</button>
       </div>
       <div className="sign-up-button">
           <button className="signup" onClick={handleSignUpClick}>Sign Up</button>
       </div>
                </form>
        </div>
    )

}

export default Login
