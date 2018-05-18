import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class NavBar extends React.Component {
    render() {
        const navigationStyle = {
            marginBottom: "5px"
        };
        return(
            //<!-- Navigation -->
            <Router>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container" style = {navigationStyle}>
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fa fa-bars"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <Link to ={"/competitions"}>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger">Tävlingskalender</a>
                            </li>
                            </Link>
                            <Link to ={"/"}>ASDASD</Link>
                            <Link to ={"/individuals"}>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger">Aktiva</a>
                                </li>
                            </Link>
                            <Link to ={"/ranking"}>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger">Rankinglista</a>
                            </li>
                        </Link>

                        </ul>
                    </div>
                </div>
            </nav>
            </Router>


        );
    }
}
