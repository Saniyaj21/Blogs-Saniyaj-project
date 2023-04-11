import React from 'react'
import { Link } from 'react-router-dom';

const Slider = ({ link, logo }) => {
    return (
        <div>
            <Link to={link}>
                <div>
                    <img className='carousel-div' src={logo} alt="" />
                </div>
            </Link>
        </div>
    )
}

export default Slider