import React from 'react'

import reactLogo from '../media/languageLogo/react.png'
import htmlLogo from '../media/languageLogo/htmlLogo.png'
import cssLogo from '../media/languageLogo/cssLogo.png'
import jsLogo from '../media/languageLogo/js.png'

import BlogLink from './BlogLink'


const Blog = () => {
    return (
        <div className='mx-2'>
            <h4 className='text-center text-success my-2 '>Let's Buid
            </h4>

            <div className="left-nav">

                <BlogLink link='/instruction' logo={htmlLogo} head="Start Contribution" />
                <BlogLink link='/blog/html' logo={htmlLogo} head="HTML" />
                <BlogLink link='/blog/css' logo={cssLogo} head="CSS" />
                <BlogLink link='/blog/javascript' logo={jsLogo} head="JavaScript" />
                <BlogLink link='/blog/react' logo={reactLogo} head="React" />
                <BlogLink link='/blog/react' logo={reactLogo} head="React" />
                <BlogLink link='/blog/django' logo={reactLogo} head="Django" />

            </div>

        </div>
    )
}

export default Blog