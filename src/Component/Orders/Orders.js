import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Orders = () => {

    const [ordersData, setorderData] = useState([])
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`http://localhost:5000/orders/:${user?.email}`)
            .then(res => res.json())
            .then(data => setorderData(data))
    }, [email])

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* head */}
                {
                    ordersData.map(orderData => {
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                    })
                }
            </table>
        </div>
    );
};

export default Orders;