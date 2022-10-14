import React from "react";
import { Route, Routes } from 'react-router-dom';
import Registrering from "../component/Registrering/Registrering";
import LandingPage from '../component/LandingPage/LandingPage';
import Home from "../component/Home/Home.jsx";

function RouteController (){
    return(
            <Routes>
                <Route exact path='/' element={<LandingPage/>} />
                <Route exact path='/register' element={<Registrering />} />
                <Route exact path='/home' element={<Home />} />
            </Routes>
    )
}


export { RouteController }