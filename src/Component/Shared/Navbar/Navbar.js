import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Navbar = () => {

    const [user] = useAuthState(auth);
    const [signOut, loading, error] = useSignOut(auth);

    const handleSingOut = () => {
        signOut();
        localStorage.removeItem('accessToken');
    }
    if (loading) {
        return <p>Loading ...</p>
    }

    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="products">Products</Link></li>
        <li><Link to="order">Orders</Link></li>
        <li><Link to="cart">Cart</Link></li>
        <li><Link to="dashboard">Dashboard</Link></li>
        <li><Link to="blog">Blog</Link></li>
        <li><Link to="signup">SingUp</Link></li>
        <li>
            {
                user && <h2 className='font-bold'>{user?.displayName} </h2>
            }
        </li>
        <li>
            {
                user ? <button className="btn bg-orange-300	border-none rounded-md hover:bg-gray-400" onClick={handleSingOut}>SignOut</button> : <li><Link to="login">Login</Link></li>
            }
        </li>
    </>

    return (
        <div className='bg-slate-200 '>
            <div className='container mx-auto h-24 	'>
                <div className="navbar flex justify-between ">
                    <div className="navbar-start mt-4 ">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {menuItems}
                            </ul>
                        </div>
                        <Link to="/" className="btn btn-ghost normal-case text-xl ">PartsBd</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex mt-4">
                        <ul className="menu menu-horizontal p-0">
                            {menuItems}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Navbar;