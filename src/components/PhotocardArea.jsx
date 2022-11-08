import React from 'react'
import Photocard from '../components/Photocard';
import photos from '../photos'

function PhotocardArea() {
  return (
    <>
    <div className='card-area'>PhotocardArea</div>
    { photos.map(entry=><Photocard {...entry}/>)}
    </>
  )
}

export default PhotocardArea