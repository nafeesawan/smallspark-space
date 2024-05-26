import React from 'react'
import './Partners.css'
import IMG1 from '../../assets/partners/1.png'
import IMG2 from '../../assets/partners/2.png'
import IMG3 from '../../assets/partners/3.png'
import IMG4 from '../../assets/partners/4.png'

const Partners = () => {
    return (
        <div className="partners container">
            <div className="part-cont container">
                <div className="heading">
                    <h1>Our Partners</h1>
                </div>
                <div className="p_imgz">
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
        </div>
    )
}

export default Partners