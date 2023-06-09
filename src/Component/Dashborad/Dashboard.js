import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content p-5">
                <h2 className='text-3xl font-bold'>Dashboard</h2>
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Orders</Link></li>
                    {/* <li><Link to='/dashboard/user'>My Account</Link></li> */}
                    <li><Link to='/dashboard/users'>All Users</Link></li>
                    <li><Link to='/dashboard/addProducts'>Add Products</Link></li>
                    <li><Link to='/dashboard/manageProducts'>Manage Products</Link></li>
                    <li><Link to='/dashboard/addBrand'>Add brands</Link></li>
                    <li><Link to='/dashboard/deliveryInfo'>Delivery Information</Link></li>
                    <li><Link to='/dashboard/review'>Review</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;