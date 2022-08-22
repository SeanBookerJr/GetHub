import React from 'react';



function Signup() {


    return (
        <div className="sign-up-form">
        <form>
            <h2>SIGN UP</h2>
            <div className="upload-image"><button id="upload-image">UPLOAD IMAGE HERE</button></div>
            <div className="input-container-name">
                <label>Full Name</label>
              <br />
              <br />
                <input id="fullName" type="text" placeholder="FULL NAME" name="uname" required />
                    {/* {renderErrorMessage("uname")} */}
   </div>
   <div className="input-container-email">
        <label>Email</label>
        <br />
        <br />
            <input id="email" type="text" placeholder="EMAIL" name="email" required />
                {/* {renderErrorMessage("pass")} */}
   </div>
   <div className="input-container-username-signup">
        <label>Username</label>
        <br />
        <br />
            <input id="username" type="text" placeholder="USERNAME" name="username" required />
                {/* {renderErrorMessage("pass")} */}
   </div>
   <div className="input-container-password-signup">
        <label>Password</label>
        <br />
        <br />
            <input id="password" type="password" placeholder="PASSWORD" name="password" required />
                {/* {renderErrorMessage("pass")} */}
   </div>
   <div className="button-container">
     <button  className="button-signup" type="submit">SIGN UP</button>
   </div>
            </form>
    </div>
    )

}

export default Signup