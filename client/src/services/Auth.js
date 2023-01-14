import { getUserData, removeUserData } from "./Storage"
import { Link, Navigate, useNavigate } from 'react-router-dom';


export const isAuthenticated = () => {
    return getUserData() != null ? true : false;
}


export const logout = () => {
    removeUserData();
}