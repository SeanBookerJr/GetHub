import React, { useState } from 'react';


function Login() {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);


    const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();
  };


    return (
        // logo
        <div className="login-card">
            <form onSubmit={handleSubmit}>
                <h2>LOGIN/SIGN UP</h2>
                <div className="input-container-username">
                    <label>Username </label>
                  <br />
                  <br />
                    <input id="username" type="text" placeholder="USERNAME" name="uname" required />
                        {renderErrorMessage("uname")}
       </div>
       <div className="input-container-password">
            <label>Password </label>
            <br />
            <br />
                <input id="password" type="password" placeholder="PASSWORD" name="pass" required />
                    {renderErrorMessage("pass")}
       </div>
       <div className="button-container">
         <button  className="button" type="submit">LOGIN</button>
       </div>
       <div className="sign-up-button">
           <button className="signup">Sign Up</button>
       </div>
                </form>
        </div>
    )

}

export default Login
