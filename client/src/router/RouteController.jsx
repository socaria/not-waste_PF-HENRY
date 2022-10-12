import React from "react";
import { Route, Routes } from 'react-router-dom';
import Register from '../component/register/Register.jsx'


function RouteController (){
    return(
            <Routes>
                <Route exact path='/register' element={<Register />} />
                <Route path='/' element={<h1>rama principal</h1>} />
            </Routes>
    )
}


export { RouteController }