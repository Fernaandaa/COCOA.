import "./Header.css";
import React from "react";
import Logo from '../../img/Logo- COCOA.png'
import { Link } from "react-router-dom";
import { FaBars, FaShoppingCart } from 'react-icons/fa';


function Header() {

    return (

        <div className="container-nav">
            <div className="container-logo-nav">
                <Link to='/main' className="logo"><img className="AA" src={Logo} /></Link>
            </div>

            <nav className="navbar">

                <input type="checkbox" id="toggler" />
                <label htmlFor="toggler" className="i-nav"><FaBars /></label>
                <div className="menu">
                    <ul className="list" id="list">
                        <h1 className="t-logo">Cocoa</h1>
                        <li><img src={require('../../img/Logo- COCOA.png')} alt="logo" className="img-bottom" /></li>
                        <li><Link to='/'>Inicio</Link></li>
                        <li><Link to='/main'>Acerca de</Link></li>
                        <li>
                            <Link to='bakery/'>Panadería</Link>
                            <ul className="list-subitem">
                                <li><Link to='/comprenhensive'>Integral</Link></li>
                                <li><Link to='/handcraft'>Artesanal</Link></li>
                                <li><Link to='/puffpastries'>Hojaldres</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to='cakeshop/'>Pastelería</Link>
                            <ul className="list-subitem">
                                <li><Link to='/biscuits'>Galletas</Link></li>
                                <li><Link to='/cakes'>Pasteles</Link></li>
                                <li><Link to='/desserts'>Postres</Link></li>
                            </ul>
                        </li>
                        <li className="i-cart"><Link to='/shop'><FaShoppingCart /></Link></li>
                    </ul>
                </div>
            </nav>
            
        </div >
    )
};

export default Header;