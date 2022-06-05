import React from "react";
import "./Cakeshop.css";
import Bannerfx from "../../components/Banner/Banner";
import Subtitlefx from "../../components/Subtitle/Subtitle";
import Footer from "../../components/Footer/Footer";
import imgCakeshop from "../../img/cakeshop/cakes/101001.jpg";
import Cards from "../../components/Cards/Cards"

export default function Cakeshop() {
    return (
        <div>
            {/*ACA EL NAV*/}
            <Bannerfx background={imgCakeshop} />
            <Subtitlefx text="PASTELERIA" />
            <Cards />
            <Footer />
        </div>
    )
};
