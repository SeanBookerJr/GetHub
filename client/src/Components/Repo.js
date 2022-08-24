import React from 'react';
import { useNavigate } from 'react-router-dom';


function Repo() {

    let navigate = useNavigate()

    function handleFileClick(e) {
        navigate('/Files')
    }

    function handleReturnClick(e) {
        navigate('/Profile')
    }

    return (
        <div id="repo-container">
                    <button className="return-profile" onClick={handleReturnClick}>Return to Profile</button>

            <h1>Repo Title PlaceHolder</h1>

            <div id="repo-header">
                <h2>Your Name PlaceHolder</h2>
            </div>
            <div id="file-name">

            </div>
            <div id="file-name">
                
            </div>
            <div id="file-name">
                
            </div>
            <div id="file-name">
                
            </div>
            <div id="file-name">
                
            </div>
            <div id="file-name">
                
            </div>
            <div id="file-name">
                
            </div>
            <div id="file-name">
                
            </div>
            <div id="file-name">
                
            </div>
            <button className="live-demo">Live Demo</button>
            <button className="add-file" onClick={handleFileClick}>Add File</button>
            <div id="live-demo">
                <h2>We put functionality to show live preview here</h2>
            </div>

        </div>
    )

}

export default Repo