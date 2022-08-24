import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Login from './Components/Login';
import Signup from './Components/Signup';
import Profile from './Components/Profile';
import Repo from './Components/Repo';
import Files from './Components/Files'

function App() {

  const [user, setUser] = useState({})

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


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login user={user} setUser={setUser}/>} />
      <Route path="/Signup" element={<Signup user={user} setUser={setUser} />} />
      <Route path="/Repo" element={<Repo />} />
      <Route path="/Profile" element={<Profile user={user} setUser={setUser} />} />
      <Route path="/Files" element={<Files />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
