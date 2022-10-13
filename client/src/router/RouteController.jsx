import React from "react";
import { Route, Routes } from 'react-router-dom';
import Register from '../component/register/Register.jsx'
import LandingPage from '../component/LandingPage/LandingPage';
import Home from "../component/Home/Home.jsx";

function RouteController (){
    return(
            <Routes>
                <Route exact path='/' element={<LandingPage/>} />
                <Route exact path='/register' element={<Register />} />
                <Route exact path='/home' element={<Home />} />
            </Routes>
    )
}


export { RouteController }