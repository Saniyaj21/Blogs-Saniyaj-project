import React from 'react'
import Step from './Step'
import BlogTitle from './BlogTitle'

const ReactPage = () => {
    return (
        <div className='container'>
            <BlogTitle title="React JS" />
            <Step
                no={1}
                heading="Install Vs Code"
            />

        </div>
    )
}

export default ReactPage