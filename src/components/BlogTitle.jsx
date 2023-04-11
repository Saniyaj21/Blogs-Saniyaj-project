import React from 'react'

const BlogtTitle = ({ title }) => {
    return (
        // css is in main.scss page
        <div className='blog-title'>
            {title}
            <hr />
        </div>
    )
}

export default BlogtTitle