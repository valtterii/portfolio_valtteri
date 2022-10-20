import React from 'react'
import './main.css'
import liana from '../../images/liana.png'
import ebikes from '../../images/ebikes.png'
import unitec from '../../images/unitec.png'
import AOS from 'aos';

function Projects(props) {    
    AOS.init({
        
    });
    return (
        <div className='section_content'>
            <h1>{props.title}</h1>
            <div className="projects">
                <a target={"_blank"} href="https://lianatechnologies.netlify.app/">
                    <div data-aos="flip-left" data-aos-mirror="true" data-aos-once="false" className="project_item">
                        <div className='tag_container'>
                            <div className='tag blue'>React.js</div>
                        </div>
                        <img src={liana} />
                    </div>
                </a>
                <a target={"_blank"} href="https://geronimo.okol.org/~karval/ebikes/">
                    <div data-aos="flip-left" data-aos-mirror="true" data-aos-once="false" className="project_item">
                        <div className='tag_container'>
                            <div style={{}} className='tag orange'>HTML, CSS, JS</div>
                        </div>
                        <img src={ebikes} />
                    </div>
                </a>
                <a target={"_blank"} href="https://unitec.fi/">
                    <div data-aos="flip-right" data-aos-mirror="true" data-aos-once="false" className="project_item">
                        <div className='tag_container'>
                            <div className='tag blue'>WordPress</div>
                        </div>
                        <img src={unitec} />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Projects