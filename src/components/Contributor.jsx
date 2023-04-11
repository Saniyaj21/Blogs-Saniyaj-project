import React from 'react'

const Contributor = ({ name, githubLink, pic }) => {
    return (
        <div className='con-div'>
            <img className='con-pic' src={pic} alt={name} />
            <p>{name}</p>

            <a href={githubLink} target='blank'><button className='btn btn-success'>Github Profile</button></a>


        </div>
    )
}

export default Contributor