import React from 'react';
import { useNavigate } from 'react-router';



function Minirepo({repo}) {

    let navigate = useNavigate()

    function handleViewClick(repo) {
   
         navigate('/Repo')

    }

    console.log(repo.id)
    console.log(repo)
    

    return (
        <div id="mini-repo-container">
            <h2 className='repo-title'>{repo.title}</h2>
            <p className='repo-des'>{repo.description}</p>
            <p className='repo-des'>{repo.tag}</p>
            <button onClick={handleViewClick} className='view'>view</button>
        </div>
    )

}

export default Minirepo