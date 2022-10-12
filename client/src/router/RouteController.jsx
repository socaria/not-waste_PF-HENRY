import React from "react";
import { Route, Routes } from 'react-router-dom';
import Register from '../component/register/Register.jsx'
import LandingPage from '../component/LandingPage/LandingPage';

function RouteController (){
    return(
            <Routes>
                <Route exact path='/' element={<LandingPage/>}></Route>
                <Route exact path='/register' element={<Register />} />
            </Routes>
    )
}


export { RouteController }