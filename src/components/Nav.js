import React, { Component } from 'react';
import {
    NavLink
  } from "react-router-dom";
class Nav extends Component {
    render() {
        return (
            <div>
                  <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                        <div className="container">
                        <a className="navbar-brand js-scroll-trigger" href="#page-top">react router</a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                            <i className="fas fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li>
                                    <NavLink to="/home">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/tin">tictuc</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/tin..">thongtinchitiet</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact">contact</NavLink>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </nav>
            </div>
        );
    }
}

export default Nav;