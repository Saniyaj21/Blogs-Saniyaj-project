import React from 'react'
import BlogLink from './BlogLink'

import htmlLogo from '../media/languageLogo/htmlLogo.png'



const Blog = () => {
    return (
        <div className='mx-2'>
            <h4 className='text-center text-success my-2 '>Let's Buid
            </h4>

            <div className="left-nav">

                <BlogLink link='/instruction' logo={htmlLogo} head="Start Contribution" />


                <BlogLink link='/blog/git-github' logo={htmlLogo} head="Git and GitHub CLI" />
            </div>

        </div>
    )
}

export default Blog