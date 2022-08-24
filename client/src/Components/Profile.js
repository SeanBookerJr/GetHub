import React from 'react';
import { useNavigate } from 'react-router';
import Repo from './Repo';



function Profile({user, setUser}) {

    let navigate = useNavigate()

    function handleViewClick(event) {
        navigate('/Repo')
    }

    function handleLogout(e) {
        fetch('/logout', {
          method: 'DELETE'
        })
        setUser({})
        navigate('/')
      }
     
    return(
        
    <div className="profile-container">
        
        <div className="header">
            <h1>Welcome Back!</h1>
            <button onClick={handleLogout} className="logout">Log out</button>
        <div className="search">
        <input id="search" placeholder="Search" type="text"></input>
        <button id="search-button">Search</button>
        </div>
            <button className="my-favorites">My Favorites</button>
        </div>
        <div className="repo-section">
           
            <div className="repo-titles">
            
                <h2>Repo Title Placeholder</h2>
                <button className="view" onClick={handleViewClick}>View</button>

            </div>
        </div>
        <div className="bio">
            <h2>My Bio</h2>
                <div className="profile-image"><img src={user.avatar_url} alt={'an avatar!'} /></div>
                <label id="profile-label">Name:</label>
                {/* <input id="input-value" type="text" placeholder="Name" name="name" /> */}
                <p id="profile-info">{user.first_name} {user.last_name} </p> 
                <br/>
                <label id="profile-label">Username:</label>
                {/* <input id="input-value" type="text" placeholder="Bio" name="bio" /> */}
                <p id="profile-info">{user.username}</p>
                <br/>
                <label id="profile-label">Password:</label>
                {/* <input id="input-value" type="text" placeholder="Bio" name="bio" /> */}
                <p id="profile-info">{user.password}</p>
                <br/>
                <label id="profile-label">A little about me:</label>
                <textarea id="input-bio" type="text" placeholder={user.bio} name="bio" />
                {/* <p id="profile-info">{user.bio}</p> */}
                <br/>
                <br/>
               
                <label id="profile-label">Email Address:</label>
                {/* <input id="input-value" type="text" placeholder="Email" name="email" /> */}
                <p id="profile-info">{user.email}</p>
                <br/>

        </div>

    </div>
)
}

export default Profile