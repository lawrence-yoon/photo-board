import React from 'react'
import {FaSearch, FaUserAstronaut, FaBars} from 'react-icons/fa'
import {SiPexels, SiPixabay, SiUnsplash} from 'react-icons/si'

function Navbar() {
  return (
    <>
        <nav className='navbar'>
            <div className='app-title'><a href='#'>Photo Board</a></div>
            <a href="#" className='burger-toggle'><FaBars/></a>
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