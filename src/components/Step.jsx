import React from 'react'

const Step = ({ no, heading }) => {
    return (
        <div className='step-div'>
            <span>Step : {no}</span>
            <p>{heading}</p>
            <hr />
        </div>
    )
}

export default Step