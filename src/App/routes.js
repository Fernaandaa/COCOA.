import React from "react";
import { BrowserRouter ,Route , Routes } from "react-router-dom"
import Home from '../pages/Home/Home'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" component={Home} />
                
            </Routes>
        </BrowserRouter>
       
    )
};

export default AppRoutes;