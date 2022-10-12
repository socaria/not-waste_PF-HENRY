import React from 'react'
import style from './landing.module.css'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function LandingPage() {
    const handleClick = (e) => {
        e.preventDefault()
        const target = e.target.getAttribute('href')
        const location = document.querySelector(target).offsetTop
    
        window.scrollTo({
          left: 0,
          top: location - 50,
        })
      }

      const img = "https://i0.wp.com/wokii.com/wp-content/uploads/2021/09/shutterstock-380434717.jpg?fit=1000%2C667&ssl=1"

      const imgIcon = 'https://cdn.iconscout.com/icon/premium/png-256-thumb/vegetarian-food-1834409-1557027.png'
  return (
    
<main>
    <nav className="navbar navbar-expand-md navbar-dark bg-ligth">
        <div className="container-fluid">
            <img src={imgIcon} alt='🥑' width='50px'/>
        <button className="navbar-toggler"
                type='button'
                data-bs-toggle='collapse'
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
            <span className="navbar-toggler-icon bg-dark"></span>
        </button>

        <div className="collapse navbar-collapse" id='navbarSupportedContent'>
            <Navbar className="navbar-nav ms-auto px-4">
                <div class="vr bg-dark"></div> 
                    <Nav href='#inicio' className="nav-link mx-4" onClick={handleClick}><Link to='/home'>INICIO</Link></Nav>
                <div class="vr bg-dark"></div>
                    <Nav className="nav-link mx-4" href='#about' onClick={handleClick}>ABOUT</Nav>
                <div class="vr bg-dark"></div>
                    <Nav href='#FAQ' onClick={handleClick} className="nav-link mx-4">FAQ's</Nav>
                <div class="vr bg-dark"></div>
                    <Nav href='#contact' onClick={handleClick}  className="nav-link mx-4">CONTACTO</Nav>
                <div class="vr bg-dark"></div>
                    <Nav href='#nosotros' onClick={handleClick}  className="nav-link mx-4">NOSOTROS</Nav>
                <div class="vr bg-dark"></div>
            </Navbar>
        </div>
    </div>
</nav>

      
      <Carousel>

      <Carousel.Item>
      <Carousel.Caption>
        

      </Carousel.Caption>
        <img
        className="d-block w-100"
          src={img}  height='500px'
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className={style.strD}>First slide label</h3>
          <h4 className={style.strD}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img} height='500px'
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className={style.strD}>Second slide label</h3>
          <h4 className={style.strD}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img} height='500px'
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className={style.strD}>Third slide label</h3>
          <h4 className={style.strD}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
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

      <div className={style.cont} id='nosotros'>
        <h1>nosotros</h1>
      </div>
      <Link to='/home'><button>GO TO HOME</button></Link>

    </main>
  )
  
}

export default LandingPage