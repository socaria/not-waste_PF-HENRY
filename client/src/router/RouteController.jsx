import React from "react";
import { Route, Routes } from 'react-router-dom';
import Registrering from "../component/Registrering/Registrering";
import LandingPage from '../component/LandingPage/LandingPage';
import Home from "../component/Home/Home.jsx";
import Profile from "../component/Profile";
import Contact from "../component/Contact";
import Developers from "../component/Developers";
import Details from "../component/CardDetails/details";

function RouteController (){
    return(
            <Routes>
                <Route exact path='/' element={<LandingPage/>} />
                <Route exact path='/register' element={<Registrering />} />
                <Route path='/home' element={<Home />} />
                <Route exact path='/profile' element={<Profile />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/developers" element={<Developers />} />
                <Route path='/home/:productId' element={<Details/>}>
        </Route>
            </Routes>
    )
}


export { RouteController }