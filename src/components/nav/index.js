import React from 'react'
import './main.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function navbar() {
  return (
    <nav className="nav-container">
        <div className="nav">
            <button className="btn"> <AnchorLink href="#info">Tietoa</AnchorLink> </button>
            <button className="btn"> <AnchorLink href="#skills">Taidot</AnchorLink> </button>
            <button className="btn"> <AnchorLink offset={"100"} href="#projects">Projektit</AnchorLink> </button>
        </div>
    </nav>
  )
}

export default navbar