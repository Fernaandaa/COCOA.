import React from "react";
import { BrowserRouter ,Route , Routes } from "react-router-dom"
import Cakeshop from "../pages/Cakeshop/Cakeshop";
import Home from '../pages/Home/Home'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element ={<Home />}></Route>
                <Route path='/cakeshop' element ={<Cakeshop />}></Route>
                
            </Routes>
        </BrowserRouter>
       
    )
};

export default AppRoutes;