import React from 'react'

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