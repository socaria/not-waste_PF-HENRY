import React from "react";
import { Link } from 'react-router-dom'
import SearchBar from "../SearchBar/SearchBar";
import Cart from '../Cart/Cart'
import Navbar from 'react-bootstrap/Navbar';
import burguermenu from '../../imagenes/burguermenu.png'
import logoProy from '../../imagenes/logoProy.png'
import LogingButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import { useAuth0 } from '@auth0/auth0-react' //esto es un hook que da auth0
import AuthProfile from "../AuthProfile";
import VerifyProfile from "../VerifyProfile";

function NavBar() {

    const {isAuthenticated} = useAuth0() //isAuthenticated me informa si es usuario esta logueado o no
    let db = VerifyProfile(AuthProfile("profile").email)
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler"
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                <span><img src={burguermenu} alt="logoburg" width='30px' /></span>
                </button>
                    <img src={logoProy} alt="logocarr" width='70px' className="mx-5"/>
                   <h3><Link to='/home' className="nav-link mx-4">Not Waste</Link></h3>
                <SearchBar />
                <div className="collapse navbar-collapse" id='navbarSupportedContent'>
                    <Navbar className="navbar-nav ms-auto mx-5">
                        <Cart />
                            {/* <img src={carrito} alt="logocarr" width='50px' className="mx-4"/> */}
                        
                        <div className="vr bg-dark"></div>
                        {isAuthenticated ? <LogoutButton /> : <LogingButton />   }
                        <div className="vr bg-dark"></div>
                        {!db.exists &&
                        <li className="nav-item"><Link to='/register' className="nav-link mx-4">REGISTER</Link></li>}
                        <div className="vr bg-dark"></div>
                    </Navbar>
                </div>
            </div>
        </nav>
    )
}


export default NavBar