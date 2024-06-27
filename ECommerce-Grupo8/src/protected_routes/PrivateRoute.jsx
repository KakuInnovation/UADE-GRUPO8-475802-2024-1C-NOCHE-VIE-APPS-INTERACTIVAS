import {useSelector} from "react-redux";
import {Navigate, Outlet, Route} from "react-router-dom";
import React from "react";

// eslint-disable-next-line react/prop-types
const PrivateRouteProfile =  ({children}) => {
    const token = useSelector((state) => state.auth.isAuthenticated);


    if (token === false) {
        return <Navigate to="/login" replace />;
    }
    return children;
}

export default PrivateRouteProfile;