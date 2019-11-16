import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {

    render() {
        return (
            <div className="">
                <footer>
                    <div className="container-fluid text-center">
                        <div className="three columns">
                            <a href="https://www.facebook.com"><span
                                class="typcn typcn-social-facebook-circular socialIcons"></span></a>

                            <a href="https://www.youtube.com/results?search_query=exercise+videos"><span
                                class="typcn typcn-social-youtube-circular socialIcons"></span></a>

                            <a href="https://www.twitter.com"><span 
                                class="typcn typcn-social-twitter-circular socialIcons"></span></a>

                            <a href="https://www.pinterest.com/"><span
                                class="typcn typcn-social-pinterest-circular socialIcons"></span></a>
                            
                            <a href="https://www.instagram.com/gymglutes/"><span
                                class="typcn typcn-social-instagram-circular socialIcons"></span></a>
                        </div>
                    </div>
                </footer>

            </div>

        )
    }
}

export default Footer;