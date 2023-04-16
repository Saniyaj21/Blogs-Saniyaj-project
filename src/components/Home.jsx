import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import Slider from './Slider';

import htmlPoster from '../media/banners/htmlBanner.png'

// Contributors
import Sani from '../creators/Sani';



const Home = () => {


    return (

        <div className="home-main">
            <div className='carousel-div'>
                <Carousel
                    infiniteLoop
                    autoPlay
                    autoReverse
                    showStatus={false}
                    showArrows={false}
                    showThumbs={false}
                    interval={1000}
                    showIndicators={false}

                >

                    <Slider link='/blog/git-github' logo={htmlPoster} />
                    <Slider link='/blog/git-github' logo={htmlPoster} />
                    <Slider link='/blog/git-github' logo={htmlPoster} />


                </Carousel>

            </div>

            <br />
            <div className="container">

                <motion.div className='my-box'
                    animate={{
                        y: [0, 5, 0],
                    }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <Sani />
                </motion.div>
                <p>Hey there, I'm Saniyaj Mallik, <br /> <br />

                    We're creating a blog website for the community and inviting developers to contribute so that the dev community can benefit from it. It's an excellent initiative to foster collaboration and knowledge-sharing among peers.</p>


                <div className="text-center"><Link to='/instruction'>
                    <motion.button className='btn btn-success btn-center'
                        animate={{
                            scale: [1, 1.1, 1],
                        }}
                        transition={{ repeat: Infinity, duration: 1 }}

                    > Start Contribution</motion.button>
                </Link></div>
                <hr />
                {/* Contributors */}
                <h2 className="head-con">Our Contributors</h2>
                <hr />
                <div className="contributors">


                    <Sani />
                </div>
            </div>
        </div >
    )
}

export default Home