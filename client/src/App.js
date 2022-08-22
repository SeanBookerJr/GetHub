import * as React from 'react';
// import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {

  // const [favorites, setFavorites] = useState(0)
  // const [profile, setProfile] = useState(0)

  // useEffect( () => {
  //   fetch('http://localhost:3000')
  //   .then(res => res.json())
  //   .then((data) => setFavorites(data))
  // }, [])

  return (
    <BrowserRouter>

   
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
