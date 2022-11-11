import React from 'react'

function Photocard({url}) {
  return (
    <>
    <img className='photo' src={url} alt="" />
    </>
  )
}

export default Photocard