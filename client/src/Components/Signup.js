import React from 'react';
import { useState } from 'react';



function Signup({user, setUser}) {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [bio, setBio] = useState("")
    const [errors, setErrors] = useState("")

const handleSignUpForm = (e) => {

    e.preventDefault()

    fetch('/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accepts': 'application/json'
          },
          body: JSON.stringify({ userName, password, firstName, lastName, email, bio})
        })
        .then(res => {
            if (res.ok) {
                res.json()
                .then(data => {
                    console.log(data)
                    setErrors([])
                    setUser(data)
                })
            } else {
                res.json()
                .then(({errors}) => setErrors(errors))
            }
        })
}
    
const handleUserNameChange = e => setUserName(e.target.value)
const handlePasswordChange = e => setPassword(e.target.value)
const handleFirstNameChange = e => setFirstName(e.target.value)
const handleLastNameChange = e => setLastName(e.target.value)
const handleEmailChange = e => setEmail(e.target.value)
const handleBioChange = e => setBio(e.target.value)

    return (
        <div className="sign-up-form">
        <form onSubmit={handleSignUpForm}>
            <h2>SIGN UP</h2>
            <div className="upload-image"><button id="upload-image">UPLOAD IMAGE HERE</button></div>
            <div className="input-container-first-name">
                <label>First Name</label>
              <br />
              <br />
                <input onChange={handleFirstNameChange} value={firstName} id="firstName" type="text" placeholder="FIRST NAME" name="fname" required />
                    {/* {renderErrorMessage("uname")} */}
   </div>
   <div className="input-container-last-name">
                <label>Last Name</label>
              <br />
              <br />
                <input onChange={handleLastNameChange} value={lastName} id="lastName" type="text" placeholder="LAST NAME" name="lname" required />
                    {/* {renderErrorMessage("uname")} */}
   </div>
   <div className="input-container-email">
        <label>Email</label>
        <br />
        <br />
            <input onChange={handleEmailChange} value={email} id="email" type="text" placeholder="EMAIL" name="email" required />
                {/* {renderErrorMessage("pass")} */}
   </div>
   <div className="input-container-username-signup">
        <label>Username</label>
        <br />
        <br />
            <input onChange={handleUserNameChange} value={userName} id="username" type="text" placeholder="USERNAME" name="username" required />
                {/* {renderErrorMessage("pass")} */}
   </div>
   <div className="input-container-password-signup">
        <label>Password</label>
        <br />
        <br />
            <input onChange={handlePasswordChange} value={password} id="password" type="password" placeholder="PASSWORD" name="password" required />
                {/* {renderErrorMessage("pass")} */}
   </div>
   <div className="input-container-bio-signup">
        <label>Password</label>
        <br />
        <br />
            <input onChange={handleBioChange} value={bio} id="bio" type="bio" placeholder="BIO" name="bio" required />
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