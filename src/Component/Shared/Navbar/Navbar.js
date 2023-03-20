import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (

        // Navbar
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">PARTSBD</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="home">Home</Link></li>
                    <li><Link to="products">Products</Link></li>
                    <li><Link to="myaccount">MyAccount</Link></li>
                    <li><Link to="blog">Blog</Link></li>
                    <li><Link to="login">Login</Link></li>
                    <li><Link to="signup">SingUp</Link></li>
                </ul>
            </div>
        </div>
    )
};

export default Navbar;