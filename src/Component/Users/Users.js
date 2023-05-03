import React from 'react';
import { useQuery } from 'react-query';
import User from './User';

const Users = () => {

    //loading all user data
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user/').then(res => res.json()));

    if (isLoading) {
        return <p>Loading ....</p>
    }

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Id</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <User user={user} index={index} refetch={refetch}></User>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users;