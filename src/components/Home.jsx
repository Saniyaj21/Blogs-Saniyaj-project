import React from 'react'
import { Link } from 'react-router-dom';
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
            <Sani />
            <p>Hey there, I'm Saniyaj Mallik, <br /> <br />

                We're creating a blog website for the community and inviting developers to contribute so that the dev community can benefit from it. It's an excellent initiative to foster collaboration and knowledge-sharing among peers.</p>


            <div className="text-center"><Link to='/instruction'><button className='btn btn-success btn-center'>Start Contribution</button></Link></div>
            <hr />
            {/* Contributors */}
            <h2 className="head-con">Our Contributors</h2>
            <hr />
            <div className="contributors">


                <Sani />
            </div>
        </div>
    )
}

export default Home