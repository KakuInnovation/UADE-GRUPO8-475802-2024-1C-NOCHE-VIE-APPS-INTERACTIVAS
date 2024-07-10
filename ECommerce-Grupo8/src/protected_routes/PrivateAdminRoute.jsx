import {useSelector} from "react-redux";
import {Navigate, Outlet, Route} from "react-router-dom";
import React from "react";

// eslint-disable-next-line react/prop-types
const PrivateAdminRoute =  ({children}) => {
    const rol = sessionStorage.getItem("rol");


    if (rol !== "ADMIN") {
        return <Navigate to="/login" replace />;
    }
    return children;
}

export default PrivateAdminRoute;