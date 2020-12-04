import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <div className="nav-header">
                        <div className="logo">
                            Lernkontrollen Editor
                        </div>           
                    </div>

                    <input type="checkbox" id="menu-toggle" />
                    <label htmlFor="menu-toggle" className="menu-show"><i className="fa fa-bars"></i></label>

                    <div className="nav">
                    <ul className="nav-links">
                        <li className="nav-item nav-link">
                            Preview
                        </li>
                        <li className="nav-item nav-link">
                            Finalize
                        </li>
                        <label htmlFor="menu-toggle" className="menu-hide"><i className="fa fa-times"></i></label>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;