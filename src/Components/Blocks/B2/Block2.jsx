import React from 'react'
import WEAPON from '../../../assets/block2-frost.png'
import VIDEO_SRC from '../../../assets/block1_vid.mp4'
import './Block2.css'

const Block2 = () => {
    return (
        <>
            <div className="frost-micro">

                <div className="left-text">
                    <video autoPlay loop muted playsInline className="video-background">
                        <source src={VIDEO_SRC} type="video/mp4" />
                    </video>
                    <div className="video-overlay"></div>
                    <div className="content">
                        <h3> Frost One </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quibusdam tempore incidunt repudiandae ratione vero atque iure voluptate. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae non libero unde ad corporis sequi dolore necessitatibus totam sapiente a! Dolorum velit quisquam corrupti distinctio quae qui vel debitis cupiditate?</p>
                        <button className='btn'> Learn More </button>
                    </div>
                </div>

                <div className="right-img">
                    <img src={WEAPON} alt="" />
                </div>
            </div>
        </>
    )
}

export default Block2