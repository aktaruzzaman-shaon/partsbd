import React from 'react';

const Order = ({ singleOrder, index }) => {

    const { name, _id, price } = singleOrder;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{price}</td>
            <td>{_id}</td>
            <td><button className="btn btn-xs">Cancel</button>
            </td>
        </tr>

    );
};

export default Order;