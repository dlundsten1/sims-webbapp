import React from "react";

export default class Contact extends React.Component {
    render() {
        return(
            // <!-- Contact Section -->
            <section id="Contact" className="download-section content-section text-center">
                <div className="container">
                    <div className="col-lg-8 mx-auto">
                        <h2>Contact Start Bootstrap</h2>
                        <p>Feel free to leave us a comment on the
                            <a href="http://startbootstrap.com/template-overviews/grayscale/">Grayscale template overview page</a>
                            on Start Bootstrap to give some feedback about this theme!</p>
                        <ul class="list-inline banner-social-buttons">
                            <li class="list-inline-item">
                                <a href="https://twitter.com/SBootstrap" class="btn btn-default btn-lg">
                                    <i class="fa fa-twitter fa-fw"></i>
                                    <span class="network-name">Twitter</span>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="https://github.com/BlackrockDigital/startbootstrap" class="btn btn-default btn-lg">
                                    <i class="fa fa-github fa-fw"></i>
                                    <span class="network-name">Github</span>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="https://plus.google.com/+Startbootstrap/posts" class="btn btn-default btn-lg">
                                    <i class="fa fa-google-plus fa-fw"></i>
                                    <span class="network-name">Google+</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}