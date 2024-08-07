import {useSelector} from "react-redux";
import {Navigate, Outlet, Route} from "react-router-dom";
import React from "react";

// eslint-disable-next-line react/prop-types
const PrivateRouteProfile =  ({children}) => {
    const token = sessionStorage.getItem("token");


    if (!token) {
        return <Navigate to="/login" replace />;
    }
    return children;
}

export default PrivateRouteProfile;