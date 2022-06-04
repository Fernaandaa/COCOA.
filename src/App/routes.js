import React from "react";
import { BrowserRouter ,Route , Routes } from "react-router-dom"
import Home from '../pages/Home/Home'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element ={<Home />}></Route>
                
            </Routes>
        </BrowserRouter>
       
    )
};

export default AppRoutes;