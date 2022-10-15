import React from 'react';
import NavBar from '../NavBar/Navbar';
import Footer from '../Footer';
import Register from "../register/Register.jsx"
import AuthProfile from '../AuthProfile';
import LogingButton from '../LoginButton';
import VerifyProfile from '../VerifyProfile';

function Registrering(){
    let log = AuthProfile("profile") // esto puede ser {}, true o false
    let db = VerifyProfile(log.email)
  
    return(<>
    {db.exists && window.location.assign("http://localhost:3000/home")};
        <div>
            <NavBar />
            {log? 
            <Register {...log}/> : 
            <div class="card w-75">
            <div class="card-body">
              <h5 class="card-title">Logging is requerid</h5>
              <p class="card-text">To register you need to log in with your Google account.</p>
              <LogingButton />
            </div>
          </div>}
            <Footer />
        </div>
    </>)
}


export default Registrering