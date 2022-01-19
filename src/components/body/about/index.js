import React from 'react'
import SocialContact from '../../../common/social-contact'
import './about.css'

function About() {
    return (
        <div className='about'>
            <div className='about-top'>
                <div className='about-info'>
                    Hey there 👋,my name is <br />
                    <span className='info-name'>Vineeth Victor.</span>
                    <br />I am a software developer.
                </div>

                <div className='about-photo'>
                    <img src={require("../../../assets/coding.png") } className='picture' />
                </div>


            </div>

           <SocialContact />
        </div>
    )
}

export default About
