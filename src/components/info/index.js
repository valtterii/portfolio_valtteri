import React from 'react'
import arrow from '../../images/arrow.gif'

function info(props) {
  return (
    <>
    <div className='section_content'>
      <h1>{props.title}</h1>
      <p>
        {props.text}
      </p>
    </div>
      
    {/* <div className='arrow_container bounce'>
        <img className='arrow' src={arrow} />
    </div> */}
    </>
  )
}

export default info