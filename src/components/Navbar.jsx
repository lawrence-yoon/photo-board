import React, {useState} from 'react'
import {FaUserAstronaut, FaBars} from 'react-icons/fa'
import {SiPexels, SiPixabay, SiUnsplash} from 'react-icons/si'

function Navbar() {
    const [isBurgerToggled, setIsBurgerToggled] = useState(false)

  return (
    <>
        <nav className='navbar'>
            <button className='app-title'>Photo Board</button>
            <button className='burger-toggle' onClick={()=>setIsBurgerToggled(!isBurgerToggled)}><FaBars/></button>
            <div className={
                isBurgerToggled? "navbar-links active" : "navbar-links"
            }>
                <ul>
                    <li><a href='https://pixabay.com/' target='_blank' rel="noopener noreferrer"><SiPixabay/> Pixabay</a></li>
                    <li><a href='https://www.pexels.com/' target='_blank' rel="noopener noreferrer"><SiPexels/> Pexels</a></li>
                    <li><a href='https://unsplash.com/' target='_blank' rel="noopener noreferrer"><SiUnsplash/> Unsplash</a></li>
                    <li><a href='https://lawrence-yoon.github.io/portfolio_v1/' target='_blank' rel="noopener noreferrer"><FaUserAstronaut/>Lawrence Yoon</a></li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar