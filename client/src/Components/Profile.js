import React from 'react';
import { useNavigate } from 'react-router-dom';


function Profile() {
    let navigate = useNavigate();

    function handleViewClick(event) {
        navigate('./Repo')
    }
    return(
        
    <div className="profile-container">
        
        <div className="header">
            <h1>Welcome Back!</h1>
            <button className="logout">Log out</button>
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
                <div className="profile-image"></div>
                <label>Name:</label>
                <br/>
                <br/>
                <input id="input-value" type="text" placeholder="Name" name="name" />
                <br/>
                <br/>
                <label>A little about me:</label>
                <br/>
                <br/>
                <input id="input-value" type="text" placeholder="Bio" name="bio" />
                <br/>
                <br/>
                <label>Email Address:</label>
                <br/>
                <br/>
                <input id="input-value" type="text" placeholder="Email" name="email" />
                <br/>
                <label>Contact:</label>
                <br/>
                <br/>
                <input id="input-value" type="text" placeholder="Contact" name="contact" />
                <br/>
                <label>Languages:</label>
                <br/>
                <br/>
                <input id="input-value" type="text" placeholder="Languages" name="languages" />

        </div>

    </div>
)
}

export default Profile