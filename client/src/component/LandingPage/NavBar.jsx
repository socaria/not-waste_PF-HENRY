import React from 'react'
import style from './s.module.css'
import { links } from './list'
function Navbar () {
    
  const handleClick = (e) => {
    e.preventDefault()
    const target = e.target.getAttribute('href')
    const location = document.querySelector(target).offsetTop

    window.scrollTo({
      left: 0,
      top: location - 64,
    })
  }
  return (
    <nav className='navbar sticky'>
      <div className='nav-center'>
        
        <nav className={style.ul}>
          {links.map((link) => {
            return (
              <ul  href={link.url} key={link.id} onClick={handleClick}>
                {link.text} 
              </ul>
            )
          })}
        </nav>
      </div>
    </nav>
  )
}

export default Navbar