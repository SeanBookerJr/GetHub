import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Files({moveFiles, setMoveFiles}) {



    const [newTitle, setNewTitle] = useState('')
    const [newFile, setNewFile] = useState('')
    const [errors, setErrors] = useState("")

    let navigate = useNavigate();

  function handleSaveClick(e) {
      e.preventDefault()

      navigate(`/Repo/${moveFiles.id}`)

      const formData = new FormData()
    formData.append("name", newTitle)
    formData.append("code", newFile)

    fetch('/attachments', {
        method: 'POST',
          body: formData
        })
        .then(res => {
            if (res.ok) {
                res.json()
                .then(data => {
                    console.log(data)
                    setErrors([])
                    navigate('/Profile')
                })
            } else {
                res.json()
                .then(({errors}) => setErrors(errors))
            }
        })

  }
  

  const handleTitleChange = e => setNewTitle(e.target.value)
  const handleFileChange = e => setNewFile(e.target.value)

console.log(moveFiles)

    return (
        <div className="files-container">
            Add a file to {moveFiles.title}
            <div className="header-textarea">
            <label for="file-type" id="label-file">     Choose a File type     </label>
                 <select name="file" id="file-type">
                    <option value="html">.html</option>
                    <option value="css">.css</option>
                    <option value="js">.js</option>
                    <option value="rb">.rb</option>
                 </select>
            <input onChange={handleTitleChange} value={newTitle} type="text" placeholder='FileName' id="file-namer"></input>
            </div>
            <textarea onChange={handleFileChange} value={newFile} className="textarea"></textarea>
            <button className="save-file" onClick={handleSaveClick}>Save File</button>

        </div>
    )
}

export default Files