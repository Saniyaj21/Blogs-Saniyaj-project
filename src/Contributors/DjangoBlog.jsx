import React from 'react'
import Code from '../components/Code'
import Text from '../components/Text'
import Step from '../components/Step'
import BlogTitle from '../components/BlogTitle'

const DjangoBlog = () => {
    let code = `import BlogTitle from '../components/BlogTitle'`
    return (
        <div className='container'>
            <BlogTitle title="Example Blog" />
            <Step no={1} heading="Start Building" />
        </div>
    )
}

export default DjangoBlog