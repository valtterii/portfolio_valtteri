import React from 'react'
import './main.css'
import linkedin from '../../images/linkedin.png'
import github from '../../images/github.png'

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer_content'>
        <h2> Valtteri Karppinen </h2>
        <div className='footer_links'>
          <a target={"_blank"} href='https://www.linkedin.com/in/valtteri-karppinen/'>
            LinkedIn <img className='logo' src={linkedin} />
          </a>
          <a target={"_blank"} href='https://github.com/valtterii/portfolio_valtteri'>
            Github <img className='logo' src={github} />
          </a>
        </div>
          <p style={{color: "dodgerblue"}}>valtteri.karppinen04(ät)gmail.com</p>
      </div>
    </footer>
  )
}

export default Footer