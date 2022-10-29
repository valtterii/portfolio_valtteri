import React, { useEffect } from 'react'
import './main.css'
import AOS from 'aos';

function Skills(props) {
    const animations = {
        zoom: {
            animation1: "zoom-out-right",
            animation2: "zoom-out-up",
            animation3: "zoom-out-left",
        },
        fade: {
            animation1: "fade-up",
        },

    }
    return (
        <>
        <div className='section_content'>
            <h1>{props.title}</h1>
            <div className='skills'>
                <div className='grid-item1 box' data-aos={animations.zoom.animation1} data-aos-offset={props.offset}>
                    <div className='skill-level'></div>
                    HTML
                </div>
                <div className='grid-item2 box' data-aos={animations.zoom.animation2} data-aos-offset={props.offset}>
                    <div className='skill-level'></div>
                    CSS
                </div>
                <div className='grid-item3 box' data-aos={animations.zoom.animation3} data-aos-offset={props.offset}>
                    <div className='skill-level novice'></div>
                    React
                </div>
                <div className='grid-item4 box' data-aos={animations.zoom.animation2} data-aos-offset={props.offset}>
                    <div className='skill-level'></div>
                    WordPress
                </div>
                <div className='grid-item5 box' data-aos={animations.zoom.animation2} data-aos-offset={props.offset}>
                    <div className='skill-level novice'></div>
                    Python
                </div>
                <div className='grid-item6 box' data-aos={animations.zoom.animation2} data-aos-offset={props.offset}>
                    <div className='skill-level novice'></div>
                    PHP
                </div>
                <div className='grid-item7 box' data-aos={animations.zoom.animation2} data-aos-offset={props.offset}>
                    <div className='skill-level novice'></div>
                    MySQL
                </div>
                <div className='grid-item8 box' data-aos={animations.zoom.animation2} data-aos-offset={props.offset}>
                    <div className='skill-level'></div>
                    Git
                </div>
                <div className='grid-item9 box' data-aos={animations.zoom.animation2} data-aos-offset={props.offset}>
                    <div className='skill-level'></div>
                    Selenium IDE
                </div>
            </div>
            <div data-aos={animations.fade.animation1} data-aos-delay="500" data-aos-duration="1500" data-aos-offset={props.offset} className='explanations'>
                <div data-aos={animations.fade.animation1} data-aos-offset={props.offset} className='skill-level'></div>
                <span>Intermediate / Advanced</span>
                <br />
                <div data-aos={animations.fade.animation1} data-aos-delay="500" data-aos-duration="500" data-aos-offset={props.offset} className='skill-level novice' style={{background: "rgb(226, 144, 21)"}}></div>
                <span>Novice</span>
                <br />
            </div>
        </div>
        </>
    )
}

export default Skills