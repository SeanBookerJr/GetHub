import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


function Repo() {

    let navigate = useNavigate()

    const [files, setFiles] = useState({})

    function handleFileClick(e) {
        navigate('/Files')
    }

    function handleReturnClick(e) {
        navigate('/Profile')
    }

    useEffect(() => {
        fetch('/repoattachments')
        .then(res => res.json())
        .then(data => setFiles(data))
    }, [])


  console.log(files.attachments)
  
  const fileAttach = files.attachments
    

    return (
        <div id="repo-container">
                    <button className="return-profile" onClick={handleReturnClick}>Return to Profile</button>

            <h1>Repo Title PlaceHolder</h1>
            <div id="repo-header">
                <h2>Your Name PlaceHolder</h2>
            </div>
            {fileAttach?.map(file => {
                return(
                 <div id="file-name">
                    <h2>{file.name}</h2>
                    <p className='code'>{file.code}</p>
                 </div>
            )})}
            <button className="live-demo">Live Demo</button>
            <button className="add-file" onClick={handleFileClick}>Add File</button>
            <div id="live-demo">
                <h2>We put functionality to show live preview here</h2>
            </div>

        </div>
    )

}

export default Repo