import React from "react";
import "./Cakeshop.css";
import Bannerfx from "../../components/Banner/Banner";
import imgCakeshop from "../../img/cakeshop/cakes/101001.jpg"
import Subtitlefx from "../../components/Subtitle/Subtitle";
import Footer from "../../components/Footer/Footer"


export default function Cakeshop() {
    return(
        <div>
            {/*ACA EL NAV
            <Bannerfx background={require(`../../img/cakeshop/cakes/101001.jpg`)}></Bannerfx>*/}

            <Subtitlefx text="Panaderia"/>
            
            <Footer/>
        </div>
    )
};
