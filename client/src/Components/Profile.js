import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import CreateRepo from './CreateRepo';
import Minirepo from './Minirepo';
import Repo from './Repo';


function Profile({user, setUser,setRepoPage}) {
    
    const [userRepo, setUserRepo] = useState({
        repositories: []
    })
    const [query, setQuery] = useState("")
    const [holder, setHolder] = useState({})

    const [username, setUsername] = useState(user.name)
    const [bio, setBio] = useState(user.bio)

    console.log(userRepo)


    let navigate = useNavigate()

    useEffect(() => {
        fetch('/userrepo')
        .then(res => res.json())
        .then(data => {
            setUserRepo(data)
            setRepoPage(data.repositories)
            setHolder(data.repositories)
        })
    }, [])

     
    console.log(userRepo.repositories)

    const filteredRepos = userRepo.repositories.filter(singleRepo => singleRepo.title.toLowerCase().includes(query.toLowerCase()))


    const handleInfoUpdate = (e) => {
        e.preventDefault();
        
    fetch(`/users/${user.id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        username,
        bio,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((updatedInfo) => {
        
        setUsername(updatedInfo.username)
        setBio(updatedInfo.bio)
        
      });

    }

    const handleUsernameChange = e => setUsername(e.target.value)
    const handleBioChange = e => setBio(e.target.value)

    // console.log(user)


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
            <h1>Welcome Back {user.first_name}!</h1>
            <button onClick={handleLogout} className="logout">Log out</button>
        <div className="search">
        <input value={query} onChange={((e) => setQuery(e.target.value))} id="search" placeholder="Search" type="text"></input>
        <button id="search-button">Search</button>
        </div>
            <button onClick={() =>navigate('/CreateRepo')} className="my-favorites">Create Repo</button>
            
        </div>
        
        <div className="repo-section">
        {userRepo["repositories"] ? filteredRepos.map(repo => <Minirepo key={repo.id} repo={repo}/> ): ""}
          {/* <div className="repo-titles">
         </div> */}
        </div>
        <div className="bio">
            <h2>My Bio</h2>
            <form onSubmit={handleInfoUpdate} className='update'>
                <div className="profile-image"><img src={user.avatar_url} alt={'an avatar!'} id="profile-image-transfer"/></div>
                <label id="profile-label">Name:</label>
                {/* <input id="input-value" type="text" placeholder="Name" name="name" /> */}
                <p id="profile-info">{user.first_name} {user.last_name} </p>
                <br/>
                
                <label id="profile-label">Username:</label>
                {/* <input id="input-value" type="text" placeholder="Bio" name="bio" /> */}
                <input className='input-update' onChange={handleUsernameChange} placeholder={user.username}></input>
                <br/>
                <br />
                <label id="profile-label">A little about me:</label>
                <textarea onChange={handleBioChange} id="input-bio" type="text" placeholder={user.bio} name="bio" />
                {/* <p id="profile-info">{user.bio}</p> */}
                <br/>
                <br/>
                <label id="profile-label">Email Address:</label>
                {/* <input id="input-value" type="text" placeholder="Email" name="email" /> */}
                <p id="profile-info">{user.email}</p>
                <button type='submit' className='update-button'>Update</button>
                </form>
                
                <br/>
        </div>
    </div>
)
}
export default Profile









