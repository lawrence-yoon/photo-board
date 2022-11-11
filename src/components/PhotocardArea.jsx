import React from 'react'
import Photocard from '../components/Photocard';
import photos from '../photos'

function PhotocardArea() {
  return (
    <>
    <div className='card-area'>
    { photos.map(entry=><Photocard {...entry}/>)}
    </div>
    </>
  )
}

export default PhotocardArea