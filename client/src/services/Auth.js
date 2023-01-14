import { getUserData, removeUserData } from "./Storage"
import { Link, Navigate } from 'react-router-dom';


export const isAuthenticated = () => {
    return getUserData() != null ? true : false;
}

export const logout = () => {
    removeUserData();
    return <Navigate to="/login" />
}