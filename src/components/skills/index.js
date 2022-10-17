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
                <div className='grid-item1 box' data-aos="zoom-out-right" data-aos-mirror="true" data-aos-once="false">
                    <div data-aos="fade-up-right" data-aos-mirror="true" data-aos-once="false" data-aos-delay="500" data-aos-duration="500" className='skill-level'></div>
                    HTML
                </div>
                <div className='grid-item2 box' data-aos="zoom-out-up" data-aos-delay="200" data-aos-mirror="true" data-aos-once="false">
                    <div data-aos="fade-up" data-aos-mirror="true" data-aos-once="false" data-aos-delay="500" data-aos-duration="500" className='skill-level'></div>
                    CSS
                </div>
                <div className='grid-item3 box' data-aos="zoom-out-left" data-aos-mirror="true" data-aos-once="false">
                    <div data-aos="fade-up-left" data-aos-mirror="true" data-aos-once="false" data-aos-delay="500" data-aos-duration="500" className='skill-level novice'></div>
                    React
                </div>
                <div className='grid-item4 box' data-aos="zoom-out-up" data-aos-delay="400" data-aos-mirror="true" data-aos-once="false">
                    <div data-aos="fade-up" data-aos-mirror="true" data-aos-once="false" data-aos-delay="500" data-aos-duration="500" className='skill-level'></div>
                    WordPress
                </div>
                <div className='grid-item5 box' data-aos="zoom-out-up" data-aos-delay="500" data-aos-mirror="true" data-aos-once="false">
                    <div data-aos="fade-up" data-aos-mirror="true" data-aos-once="false" data-aos-delay="500" data-aos-duration="500" className='skill-level novice'></div>
                    Python
                </div>
                <div className='grid-item6 box' data-aos="zoom-out-up" data-aos-delay="600" data-aos-mirror="true" data-aos-once="false">
                    <div data-aos="fade-up" data-aos-mirror="true" data-aos-once="false" data-aos-delay="500" data-aos-duration="500" className='skill-level novice'></div>
                    PHP
                </div>
                <div className='grid-item7 box' data-aos="zoom-out-up" data-aos-delay="700" data-aos-mirror="true" data-aos-once="false">
                    <div data-aos="fade-up" data-aos-mirror="true" data-aos-once="false" data-aos-delay="500" data-aos-duration="500" className='skill-level novice'></div>
                    MySQL
                </div>
                <div className='grid-item8 box' data-aos="zoom-out-up" data-aos-delay="800" data-aos-mirror="true" data-aos-once="false">
                    <div data-aos="fade-up" data-aos-mirror="true" data-aos-once="false" data-aos-delay="500" data-aos-duration="500" className='skill-level'></div>
                    Git
                </div>
                <div className='grid-item9 box' data-aos="zoom-out-up" data-aos-delay="900" data-aos-mirror="true" data-aos-once="false">
                    <div data-aos="fade-up" data-aos-mirror="true" data-aos-once="false" data-aos-delay="500" data-aos-duration="500" className='skill-level'></div>
                    Selenium IDE
                </div>
            </div>
            <div data-aos="fade-up" data-aos-mirror="true" data-aos-once="false" data-aos-delay="500" data-aos-duration="1500" className='explanations'>
                <div data-aos="fade-up" data-aos-mirror="true" data-aos-once="false" data-aos-delay="500" data-aos-duration="500" className='skill-level'></div>
                <span>Intermediate / Advanced</span>
                <br />
                <div data-aos="fade-up" data-aos-mirror="true" data-aos-once="false" data-aos-delay="500" data-aos-duration="500" className='skill-level novice' style={{background: "rgb(226, 144, 21)"}}></div>
                <span>Novice</span>
                <br />
            </div>
        </div>
        </>
    )
}

export default Skills