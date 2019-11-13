import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {

    // render() {
    //     return (
    //         <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
    //             <Link to="/" className="navbar-brand">Sweat</Link>
    //             <div className="collpase navbar-collapse">
    //                 <ul className="navbar-nav mr-auto">
    //                     <li className="navbar-item">
    //                         <Link to="/" className="nav-link">Exercises</Link>
    //                     </li>
    //                     <li className="navbar-item">
    //                         <Link to="/create" className="nav-link">Create Exercise Log</Link>
    //                     </li>
    //                     <li className="navbar-item">
    //                         <Link to="/user" className="nav-link">Create User</Link>
    //                     </li>
    //                 </ul>
    //             </div>
    //         </nav>
    //     )
    // }
    render() {
        return (
            <div className="navbar-fixed">
                <nav className="z-depth-0">
                    <div className="nav-wrapper white">
                        <Link to="/" className="col s5 brand-logo center black-text" style={{ fontFamily: "monospace" }}>
                        </Link>
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>

                            <li className="navbar-item">
                                <Link to="/create_user" className="nav-link">Create New Sweater</Link>
                            </li>

                            <li className="navbar-item">
                                <Link to="/create_exercise" className="nav-link">Create A Sweat!</Link>
                            </li>

                            <li className="navbar-item">
                                <Link to="/exercise_list" className="nav-link">Drip Log</Link>
                            </li>

                            <li className="navbar-item">
                                <Link to="/Dashboard" className="nav-link">Logout</Link>
                            </li>


                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;