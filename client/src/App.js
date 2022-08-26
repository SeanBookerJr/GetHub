import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Login from './Components/Login';
import Signup from './Components/Signup';
import Profile from './Components/Profile';
import Repo from './Components/Repo';
import Files from './Components/Files';
import Minirepo from './Components/Minirepo';

function App() {


  const [user, setUser] = useState({})
  const [repoPage, setRepoPage] = useState([])
  const [moveFiles, setMoveFiles] = useState([])


  useEffect( () => {
    fetch('/me')
    .then(res => {
      if (res.ok) {
        res.json()
        .then(data => {
          setUser(data)
        })
      }
    })
  }, [])

  // console.log(user)

  // useEffect(() => {
  // if(repoPage.length != 0 ){
  //   console.log("Repos : ", repoPage)
  // }
  
  // }, [repoPage])
  
console.log(moveFiles)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login user={user} setUser={setUser}/>} />
      <Route path="/Signup" element={<Signup user={user} setUser={setUser} />} />
      <Route path="/Repo/:id" element={<Repo repo={repoPage} setMoveFiles={setMoveFiles} />} />
      {/* <Route path="/Minirepo" element={<Minirepo  setRepoPage={setRepoPage} user={user} setUser={setUser} />} /> */}
      <Route path="/Profile" element={<Profile user={user} setUser={setUser} setRepoPage={setRepoPage}/>} />
      <Route path="/Files" element={<Files moveFiles={moveFiles} setMoveFiles={setMoveFiles} />} />
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
