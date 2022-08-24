import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Minirepo from './Minirepo';
import Repo from './Repo';



function Profile({user, setUser}) {

    const [userRepo, setUserRepo] = useState({})

    let navigate = useNavigate()


    useEffect(() => {
        fetch('/userrepo')
        .then(res => res.json())
        .then(data => setUserRepo(data))
    }, [])

    console.log(userRepo.repositories);
    const showRepos = userRepo.repositories

    const mappedRepos =  showRepos?.map(repo => <Minirepo key={repo.id} repo={repo}/>)


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
        {mappedRepos}
          {/* <div className="repo-titles">
         </div> */}
        </div>
        <div className="bio">
            <h2>My Bio</h2>
                <div className="profile-image"></div>
                <label>Name:</label>
                {/* <input id="input-value" type="text" placeholder="Name" name="name" /> */}
                <p>{user.first_name} {user.last_name} </p> 
                <br/>
                <label>Username:</label>
                {/* <input id="input-value" type="text" placeholder="Bio" name="bio" /> */}
                <p>{user.username}</p>
                <br/>
                <label>Password:</label>
                {/* <input id="input-value" type="text" placeholder="Bio" name="bio" /> */}
                <p>{user.password}</p>
                <br/>
                <label>A little about me:</label>
                {/* <input id="input-value" type="text" placeholder="Bio" name="bio" /> */}
                <p>{user.bio}</p>
                <br/>
                <label>Email Address:</label>
                {/* <input id="input-value" type="text" placeholder="Email" name="email" /> */}
                <p>{user.email}</p>
                <br/>

        </div>

    </div>
)
}

export default Profile