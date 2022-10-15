import React from 'react'
import style from './landing.module.css'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

function LandingPage() {
    const handleClick = (e) => {
        e.preventDefault()
        const target = e.target.getAttribute('href')
        const location = document.querySelector(target).offsetTop
    
        window.scrollTo({
          left: 0,
          top: location - 150,
          down: location - 10
        })
      }

      const img='https://static.vecteezy.com/system/resources/previews/002/032/170/large_2x/healthy-diet-ingredients-on-a-shabby-white-background-free-photo.jpg'
      const img2='https://static.vecteezy.com/system/resources/previews/003/350/919/large_2x/top-view-of-healthy-food-on-white-wooden-background-photo.jpg'
      const img3= 'https://static.vecteezy.com/system/resources/previews/002/032/172/large_2x/top-view-of-healthy-foods-on-a-dark-slate-background-free-photo.jpg'
      const imgIcon = 'https://cdn.iconscout.com/icon/premium/png-256-thumb/vegetarian-food-1834409-1557027.png'
  return (
    
<main className={style.ul}>
<div>
    <nav className="navbar navbar-expand-md bg-ligth">
        <div className="container-fluid">
            <img src={imgIcon} alt='🥑' width='50px'/>
        <button className="navbar-toggler"
                type='button'
                data-bs-toggle='collapse'
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
            <span className="navbar-toggler-icon bg-ligth"></span>
        </button>

        <div className="collapse navbar-collapse" id='navbarSupportedContent'>
            <Navbar className="navbar-nav ms-auto px-4">
                <div className="vr bg-dark"></div> 
                    <Nav href='#inicio' className="nav-link mx-4" onClick={handleClick}><Link to='/home'>INICIO</Link></Nav>
                <div className="vr bg-dark"></div>
                    <Nav className="nav-link mx-4 text-light" href='#about' onClick={handleClick}>ABOUT</Nav>
                <div className="vr bg-dark"></div>
                    <Nav href='#FAQ' onClick={handleClick} className=" text-white mx-4">FAQ's</Nav>
                <div className="vr bg-dark"></div>
                    <Nav href='#nosotros' onClick={handleClick} className="nav-link text-white mx-4">NOSOTROS</Nav>
                <div className="vr bg-dark"></div>
                    <Nav href='#contact' onClick={handleClick} className="nav-link text-light mx-4">CONTACTANOS</Nav>
                <div className="vr bg-dark"></div>
            </Navbar>
        </div>
    </div>
</nav>
  </div>

      
      <Carousel >

      <Carousel.Item>
        <img
        className="d-block w-100 "
          src={img}  height='500px' 
          alt="First slide"/>

        <Carousel.Caption>
          <h3 className={style.strD}>First slide label</h3>
          <h4 className={style.strD}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
        </Carousel.Caption>

    </Carousel.Item>

    <Carousel.Item >
        <img
          className="d-block w-100"
          src={img2} height='500px' 
          alt="Second slide"/>

        <Carousel.Caption>
          <h3 className={style.strD}>Second slide label</h3>
          <h4 className={style.strD}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
        </Carousel.Caption>

    </Carousel.Item>

    <Carousel.Item >
        <img
          className="d-flex w-100"
          src={img3} height='500px' 
          alt="Third slide"/>

        <Carousel.Caption>
          <h3 className={style.strD}>Third slide label</h3>
          <h4 className={style.strD}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h4>
        </Carousel.Caption>

    </Carousel.Item>
    </Carousel>
<div >
      <div className={style.cont} id='about'>
      <div className={style.cont2}>
          <h1>ABOUT US</h1>
          <p>Lorem ipsum dolor sit amet,<strong>consectetur</strong> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </div>
      </div>

      <div className={style.cont} id='FAQ'>
          <div className={style.cont2}>
        <h1>FAQ</h1>
        <p>Lorem ipsum dolor sit amet, consectetur. adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
      </div>


      <div className={style.cont} id='nosotros'>
      <div className={style.cont2}>
          <h1 >NOSOTROS</h1>
          <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
      </div>


      <footer  id='contact'>
<Footer/>
      </footer>
      </div>
    </main>
  )
  
}

export default LandingPage