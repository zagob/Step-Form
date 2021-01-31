import React, { useState } from 'react';
import './Header.css';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';

import logomarca from '../../../assets/image/logo-marca.png';

function Header() {
    return (
        <div className="p-grid p-nogutter">
            <div className="p-sm-12 container-header">
                <div className="container-logomarca">
                    <img src={logomarca} width="237" height="56" alt="logo" />
                </div>
                <div className="container-menu">
                    <nav className="menu-bar-esq">
                        <ul className="lista-menu">
                            <li className="texto-menu-esqu" >
                                <Link className="link-menu" to="/Alugar">ALUGAR</Link>
                            </li>
                            <li className="texto-menu-esqu">
                                <Link className="link-menu" to="/Anunciar">ANUNCIAR</Link>
                            </li>
                            <li className="texto-menu-esqu">
                                <Link className="link-menu" to="/users">INDICAR</Link>
                            </li>
                            <li className="texto-menu-esqu">
                                <Link className="link-menu" to="/Cadastro">CADASTRO</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="divisor-menu"></div >
                    <nav className="menu-bar-dir dropdown">
                        <ul className="lista-menu">
                            <li className="texto-menu-dir">
                                <Link className="link-menu" to="/">FULANO</Link>
                            </li>
                        </ul>
                        <Dropdown />
                    </nav>
                </div>
            </div>
        </div>
    );
}
export default Header;