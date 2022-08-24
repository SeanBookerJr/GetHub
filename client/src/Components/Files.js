import React from 'react';
import { useNavigate } from 'react-router-dom';


function Files() {

    let navigate = useNavigate();

  function handleSaveClick() {
      navigate('/Repo')
  }
    return (
        <div className="files-container">
            <div className="header-textarea">
            <label for="file-type" id="label-file">     Choose a File type     </label>
                 <select name="file" id="file-type">
                    <option value="html">.html</option>
                    <option value="css">.css</option>
                    <option value="js">.js</option>
                    <option value="rb">.rb</option>
                 </select>
            <input type="text" placeholder='FileName' id="file-namer"></input>
            </div>
            <textarea className="textarea"></textarea>
            <button className="save-file" onClick={handleSaveClick}>Save File</button>

        </div>
    )
}

export default Files