import React from 'react'

function info(props) {
  return (
    <>
    <div className='section_content'>
      <div className='info_content' style={{maxWidth: "1200px"}}>
        <h1>{props.title}</h1>
        <p>
          {props.paragraph1}
        </p>
        <p>
          {props.paragraph2}
        </p>
      </div>
    </div>
    </>
  )
}

export default info