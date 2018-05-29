import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Competitions from "./Competitions";
import Individuals from "./Individuals";


export default class Header extends React.Component {
    render() {
        const headerStyle = {
            minHeight: "600px"
        };
        return(

        <Router>
            <header className="masthead" style = {headerStyle}>
                <div className="intro-body">
                    <div className="container">
                        <Route path="/competitions" component={Competitions}></Route>
                        <Route path="/Individuals" component={Individuals}></Route>
                        <Route exact={true} path="/" render={() => <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <h1 className="brand-heading">Grayscale</h1>
                                <p className="intro-text">A free, responsive, one page Bootstrap theme.
                                    <br />Created by Start Bootstrap.</p>
                            </div>
                        </div>}/>

                    </div>
                </div>
            </header>
        </Router>
    );
    }
}
