import React, { useEffect } from 'react'
import './main.css'
import liana from '../../images/liana.png'
import ebikes from '../../images/ebikes.png'
import unitec from '../../images/unitec.png'

function Projects(props) {    
    const animations = {
        flip: {
            animation1: "flip-left",
            animation2: "flip-right",
        },
        fade: {
            animation1: "fade-right",
        }
    }
    return (
        <div className='section_content'>
            <h1>{props.title}</h1>
            <div className="projects">
                <a target={"_blank"} href="https://lianatechnologies.netlify.app/">
                    <div data-aos={animations.flip.animation1} data-aos-offset={props.offset} className="project_item">
                        <div data-aos={animations.fade.animation1} data-aos-offset={props.offset} data-aos-delay="100" className='tag_container'>
                            <div className='tag blue'>React.js</div>
                        </div>
                        <img src={liana} />
                    </div>
                </a>
                <a target={"_blank"} href="https://geronimo.okol.org/~karval/ebikes/">
                    <div data-aos={animations.flip.animation1} data-aos-offset={props.offset} className="project_item">
                        <div data-aos={animations.fade.animation1} data-aos-offset={props.offset} data-aos-delay="100" className='tag_container'>
                            <div style={{}} className='tag orange'>HTML, CSS, JS</div>
                        </div>
                        <img src={ebikes} />
                    </div>
                </a>
                <a target={"_blank"} href="https://unitec.fi/">
                    <div data-aos={animations.flip.animation2} data-aos-offset={props.offset} className="project_item">
                        <div data-aos={animations.fade.animation1} data-aos-offset={props.offset} data-aos-delay="100" className='tag_container'>
                            <div className='tag blue'>WordPress</div>
                        </div>
                        <img src={unitec} />
                    </div>
                </a>
                <a target={"_blank"} href="https://github.com/valtterii">
                    <div data-aos={animations.fade.animation1} data-aos-offset={props.offset} className="project_item item_last">
                        <div className='suggestion_text'>
                            Haluatko nähdä loputkin projektit? <br />Klikkaa tästä niin pääset minun Github sivulle.
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Projects