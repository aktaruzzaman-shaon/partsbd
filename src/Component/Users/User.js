import React from 'react';

const User = ({ user, index, refetch }) => {

    const { _id, email, role } = user;
    const handleMakeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method:"PUT"
        })
        .then(res=> res.json())
        .then(data=> {
            refetch()
            console.log(data)
        })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{_id}</td>
            <td>{ role !== "admin" && <button onClick={handleMakeAdmin} className="btn btn-xs">Admin</button>}</td>
            <td><button className="btn btn-xs">Delete</button></td>
        </tr>
    );
};

export default User;