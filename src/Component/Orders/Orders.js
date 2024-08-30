import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Order from './Order';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const Orders = () => {

    const [ordersData, setorderData] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const mail = user?.email;

    useEffect(() => {
        fetch(`http://localhost:5000/orders?mail=${mail}`, {
            method: 'GET',
            headers: {
                'authorization': ` Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.satus === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/home')
                }
                return res.json()
            })
            .then(data => setorderData(data))
    }, [])
    console.log('orders page')
    return (

        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Pirce</th>
                        <th>Id</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ordersData.map((singleOrder, index) => <Order singleOrder={singleOrder} index={index}></Order>)
                    }
                </tbody>
            </table>
        </div>
    )
};



export default Orders;