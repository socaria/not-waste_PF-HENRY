import React from 'react'
import Navbar from './NavBar'
import style from './s.module.css'

function LandingPage() {
  return (
    <main id='inicio'>
      <Navbar />

      <div className={style.cont}>
        <h1>inicio</h1>
      </div>

      <div className={style.cont} id='about'>
        <h1>about</h1>
      </div>

      <div className={style.cont} id='FAQ'>
        <h1>FAQ</h1>
      </div>

      <div className={style.cont} id='contact'>
        <h1>contact</h1>
      </div>

    </main>
  )
}

export default LandingPage