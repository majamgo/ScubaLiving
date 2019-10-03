import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import './Navbar.scss';
import Logo from '../../img/ScubaLiving_logo_small.svg';
import Lock from '../../img/lock-icon-300x300.png';

const Navbar = (props) => {

    return (

        <nav>

            <div className="nav-logo">
                <img src={Logo} alt="ScubaLiving logo"/>
            </div>

                <ul className="navbar-nav">
                    <li className="nav-item margin--right">
                        <Link to="/" exact>HOME</Link>
                    </li>
                    <li className="nav-item margin--right">
                        <NavLink to="/produkter" >DYKKERUDSTYR</NavLink>
                    </li>
                    <li className="nav-item margin--right">
                        <NavLink to="/rejser" >DYKKERREJSER</NavLink>
                    </li>
                    <li className="nav-item margin--right">
                        <NavLink to="/kurser" >DYKKERKURSER</NavLink>
                    </li>
                    <li className="nav-item margin--right">
                        <NavLink to="/kontakt" >KONTAKT</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/omos" >OM OS</NavLink>
                    </li>
                </ul>

                <form className="search">
                    <input type="text" name="search" className="search-input"/>
                    <button className="search-btn">SØG</button>
                </form>

                <ul className="login-con">
                    <li>
                        <NavLink className="login-item" to="/login">
                         <div className="login-lock"><img src={Lock} alt="Lås"/></div>
                         <div className="login-text"><p>LOGIN</p></div>
                        </NavLink>
                    </li>
                </ul>

        </nav>

    );
}

export default withRouter(Navbar);