import React from "react";
import "./Cakeshop.css";
import Bannerfx from "../../components/Banner/Banner";
import imgCakeshop from "../img/cakeshop/cakes/101001.jpg"

export default function Cakeshop() {
    return(
        <div>
            {/*ACA EL NAV*/}
            <Bannerfx background={require(`../../img/cakeshop/cakes/101001.jpg`)}></Bannerfx>
        </div>
    )
};