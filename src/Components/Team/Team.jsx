import React from 'react'
import './Team.css'
import IMGT from '../../assets/teams/teams.png'
import VIDEO_SRC from '../../assets/block1_vid.mp4'
import IMG1 from '../../assets/teams/1.png'
import IMG2 from '../../assets/teams/2.png'
import IMG3 from '../../assets/teams/3.png'
import IMG4 from '../../assets/teams/4.png'

const Team = () => {
    return (
        <div className="teams-container">
            <div className="teams ">
                {/* <div className="left-text">
                <h3>Our Team</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae eum quidem ea similique nostrum, omnis corrupti fugit veritatis expedita deleniti, vel sequi excepturi aspernatur officia minima facere asperiores quaerat fuga!</p>
            </div> */}
                <div className="left-text">
                    <video autoPlay loop muted playsInline className="video-background">
                        <source src={VIDEO_SRC} type="video/mp4" />
                    </video>
                    <div className="video-overlay"></div>
                    <div className="content">
                        <h3> Our Team </h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae eum quidem ea similique nostrum, omnis corrupti fugit veritatis expedita deleniti, vel sequi excepturi aspernatur officia minima facere asperiores quaerat fuga!</p>
                    </div>
                </div>
                <div className="right-img">
                    <img src={IMGT} alt="" />
                </div>
            </div>
            <div className="t_imgz">
                <div className="img_cont">
                    <img src={IMG1} alt="" />
                </div>
                <div className="img_cont">
                    <img src={IMG2} alt="" />
                </div>
                <div className="img_cont">
                    <img src={IMG3} alt="" />
                </div>
                <div className="img_cont">
                    <img src={IMG4} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Team