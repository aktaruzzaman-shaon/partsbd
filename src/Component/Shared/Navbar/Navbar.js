import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const [signOut, loading, error] = useSignOut(auth);

    const handleSingOut = () => {
        signOut();
    }
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
                    <li><Link to="signup">SingUp</Link></li>
                    <li>
                        {
                            user && <h2 className='font-bold'>{user?.displayName} </h2>
                        }
                    </li>
                    <li>
                        {
                            user ? <button className="btn" onClick={handleSingOut}>SignOut</button> : <li><Link to="login">Login</Link></li>
                        }
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Navbar;