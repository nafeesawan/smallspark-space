import React from 'react'
import './Awards.css'
import SKY_VID from "../../assets/sky.mp4"

const Awards = () => {
    return (
        <div className="awards-container">
            <video autoPlay loop muted playsInline className="video-background">
                <source src={SKY_VID} type="video/mp4" />
            </video>
            <div className="video-overlay"></div>
            <div className="content">
                <div className="row container">
                    <div className="col1"><h1>Awards</h1></div>
                    <div className="col2"><hr /></div>
                    <div className="col3">
                        <h3>
                            UK Space Agencey: Glyndwr Innovation Price
                        </h3>
                        <p>In 2018, Smallpark Space System was awarded a $10,000 grant from the UK Space Agency to support the development of the business and technologies: </p>
                        <button className='btn'>Read More</button>
                    </div>
                    <div className="col4">
                        <h3>
                            Research England SPRINT Grant
                        </h3>
                        <p>In Q1 2020, Smallpark Space System was awarded a $10,000 grant by Research England via SPRINT.ac.uk to allow the certificated development of its...</p>
                        <button className='btn'>Read More</button>
                    </div>
                    <div className="col5">
                        <h3>
                            <span>European Regional Development Fund:</span>
                        </h3>
                        <p>In Q1 2020, Smallpark Space System was awarded funding from the European Regional Development Fund via the Weslcot Business Incubtion...</p>
                        <button className='btn'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Awards