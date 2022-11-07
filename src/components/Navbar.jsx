import React from 'react'
import {FaSearch} from 'react-icons/fa'
import {SiPexels, SiPixabay, SiUnsplash} from 'react-icons/si'

function Navbar() {
  return (
    <>
        <nav className='navbar'>
            <div className='app-title'><a href='#'>Photo Board</a></div>
            <div className="search-bar">
                <input type="text" className="search-field" />
                <button className='search-button'><FaSearch/> Search</button>
            </div>
            <div className='navbar-links'>
                <ul>
                    <li><a href='#'><SiPixabay/> Pixabay</a></li>
                    <li><a href='#'><SiPexels/> Pexels</a></li>
                    <li><a href='#'><SiUnsplash/> Unsplash</a></li>
                    <li><a href='#'>Link4</a></li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar