import React, {useState} from 'react'
import {FaUserAstronaut, FaBars} from 'react-icons/fa'
import {SiPexels, SiPixabay, SiUnsplash} from 'react-icons/si'

function Navbar() {
    const [burgerToggle, setBurgerToggle] = useState(false)
    const navbarLinks = document.getElementsByClassName('navbar-links')[0]
    const toggleHandler = function(e){
        e.prevent.default();
        if(!burgerToggle){
            navbarLinks.classList.toggle('active')
            setBurgerToggle(true)
        }   else{
            navbarLinks.classList.toggle('active')
            setBurgerToggle(false)
        }
    }
  return (
    <>
        <nav className='navbar'>
            <button className='app-title'>Photo Board</button>
            <button className='burger-toggle' onClick={toggleHandler}><FaBars/></button>
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