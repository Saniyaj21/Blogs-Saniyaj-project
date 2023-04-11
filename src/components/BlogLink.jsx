import React from 'react'
import { Link } from 'react-router-dom';

const BlogLink = ({ link, logo, head }) => {
    return (
        <div>
            <Link to={link} className='blog-link'><div className="blog-box">
                <img className='blog-logo' src={logo} alt="" />
                <p className='blog-topic'>{head}</p>

            </div></Link>
        </div>
    )
}

export default BlogLink