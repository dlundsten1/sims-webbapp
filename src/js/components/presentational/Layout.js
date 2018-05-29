import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";

export default class Layout extends React.Component {
    render() {
        return(

            <div>
                <NavBar/>
                <Header/>
                <About />

                <Contact />
            </div>

        );
    }
}

