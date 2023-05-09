import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, setAdminLoading] = useAdmin(user);
    const location = useLocation();
    console.log(admin);
    if (loading || setAdminLoading) {
        return <p>Loading ...</p>
    }

    if (!user || !admin) {
        return <Navigate to="/login" state={{ from: location }}></Navigate>
    }
    return children;
};

export default RequireAdmin;