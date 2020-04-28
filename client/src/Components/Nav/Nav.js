import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Nav.scss';
import btn from './btn.svg'


const Nav = (props) => {

    return (
        <nav id="mainnav" className="navbar navbar-expand-md">
            <div className="container my-2">
                <Logo class="navlogo mb-1" anchorclass="navbar-logo" height="55" width="55"/>
                <button className="navbar-toggler navbar-btn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <img src={btn} alt="btn" height="45" width="45"/>
                </button>

                <div className="pt-2 collapse navbar-collapse navbg" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/login" className="nav-item nav-link">Login</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;