import React, { useState } from 'react';
import { useAsyncError } from 'react-router-dom';

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    const email = user.email;
    useState(() => {
        fetch(`http://localhost:5000/user/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
                setAdminLoading(false)
            })
    }, [email])

    return [admin, adminLoading]
};

export default useAdmin;