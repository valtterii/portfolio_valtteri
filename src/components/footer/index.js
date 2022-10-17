import React from 'react'
import './main.css'
import linkedin from '../../images/linkedin.png'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer_content'>
        <h2> Valtteri Karppinen</h2>
          <a target={"_blank"} href='https://www.linkedin.com/in/valtteri-karppinen/'>
            LinkedIn <img className='linkedin' src={linkedin} />
          </a>
      </div>
    </div>
  )
}

export default Footer