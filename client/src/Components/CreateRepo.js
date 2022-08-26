import React from 'react';
import { useNavigate } from 'react-router-dom';

function CreateRepo() {

  let navigate = useNavigate();

function handleCreateClick(event) {
  navigate('/Profile')
}

  return (
    <div className="create-repo-div">
        <div className="create-repo-header">
          <input type="text" placeholder='Repo Name' id="repo-name"></input>
          
        </div>
        <div classname="readme">
        <h1 id="readme">README.md</h1>
        </div>
        <textarea className="create-repo-textarea"></textarea>
          <button className="create-repo-button" onChange={handleCreateClick}>Create</button>
    </div>
  )
}

export default CreateRepo