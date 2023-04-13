import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Order from './Order';

const Orders = () => {

    const [ordersData, setorderData] = useState([]);
    const [user] = useAuthState(auth);
    const mail = user?.email;

    useEffect(() => {
        fetch(`http://localhost:5000/orders?mail=${mail}`)
            .then(res => res.json())
            .then(data => setorderData(data))
    }, [])

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