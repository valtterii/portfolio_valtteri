import React from 'react'
import './main.css'
import linkedin from '../../images/linkedin.png'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer_content'>
        <h2> Valtteri Karppinen </h2>
          <a target={"_blank"} href='https://www.linkedin.com/in/valtteri-karppinen/'>
            LinkedIn <img className='linkedin' src={linkedin} />
          </a>
          <p style={{color: "dodgerblue"}}>valtteri.karppinen04(ät)gmail.com</p>
      </div>
    </div>
  )
}

export default Footer