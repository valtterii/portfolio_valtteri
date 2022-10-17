import React from 'react'
import './main.css'
import '../../animations.css'
import AOS from 'aos';

function Skills(props) {
    AOS.init({
        
    });
    return (
        <>
        <div className='section_content'>
            <h1>{props.title}</h1>
            <div className='skills'>
                <div className='box' data-aos="zoom-out-right" data-aos-mirror="true" data-aos-once="false">
                    HTML
                </div>
                <div className='box' data-aos="zoom-out-up" data-aos-delay="200" data-aos-mirror="true" data-aos-once="false">
                    CSS
                </div>
                <div className='box' data-aos="zoom-out-left" data-aos-mirror="true" data-aos-once="false">
                    React
                </div>
                <div className='box' data-aos="zoom-out-up" data-aos-delay="400" data-aos-mirror="true" data-aos-once="false">
                    WordPress
                </div>
                <div className='box' data-aos="zoom-out-up" data-aos-delay="500" data-aos-mirror="true" data-aos-once="false">
                    Python
                </div>
                <div className='box' data-aos="zoom-out-up" data-aos-delay="600" data-aos-mirror="true" data-aos-once="false">
                    PHP
                </div>
                <div className='box' data-aos="zoom-out-up" data-aos-delay="700" data-aos-mirror="true" data-aos-once="false">
                    MySQL
                </div>
                <div className='box' data-aos="zoom-out-up" data-aos-delay="800" data-aos-mirror="true" data-aos-once="false">
                    Git
                </div>
                <div className='box' data-aos="zoom-out-up" data-aos-delay="900" data-aos-mirror="true" data-aos-once="false">
                    Selenium IDE
                </div>
            </div>
        </div>
        </>
    )
}

export default Skills