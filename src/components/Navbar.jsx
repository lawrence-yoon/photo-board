import React from 'react'
import {FaSearch, FaUserAstronaut} from 'react-icons/fa'
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
                    <li><a href='https://pixabay.com/'><SiPixabay/> Pixabay</a></li>
                    <li><a href='https://www.pexels.com/'><SiPexels/> Pexels</a></li>
                    <li><a href='https://unsplash.com/'><SiUnsplash/> Unsplash</a></li>
                    <li><a href='https://lawrence-yoon.github.io/portfolio_v1/'><FaUserAstronaut/>Lawrence Yoon</a></li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar