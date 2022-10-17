import React from 'react'
import './main.css'
import liana from '../../images/liana.png'
import ebikes from '../../images/ebikes.png'
import unitec from '../../images/unitec.png'
import AOS from 'aos';

function projects(props) {
    AOS.init({
        
    });
    return (
        <div className='section_content'>
            <h1>{props.title}</h1>
            <div className="projects">
                <a href="https://geronimo.okol.org/~karval/LianaTech/">
                    <div data-aos="flip-left" data-aos-mirror="true" data-aos-once="false" className="project_item">
                        <img src={liana} />
                    </div>
                </a>
                <a href="https://geronimo.okol.org/~karval/ebikes/">
                    <div data-aos="flip-left" data-aos-mirror="true" data-aos-once="false" className="project_item">
                        <img src={ebikes} />
                    </div>
                </a>
                <a href="https://unitec.fi/">
                    <div data-aos="flip-right" data-aos-mirror="true" data-aos-once="false" className="project_item">
                        <img src={unitec} />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default projects