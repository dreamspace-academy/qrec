import React from 'react';
import { logout } from '../services/Auth';
import { Button } from 'semantic-ui-react'
import { isAuthenticated } from '../services/Auth';
import { Navigate, useNavigate } from 'react-router-dom';
import DASH from '../Components/Dash-bord';

const LogOut = (props) => {

    const navigate = useNavigate();

    const logoutUser = () => {
        logout();
        navigate('/', { replace: true })
    }

    if (!isAuthenticated()) {
        return <Navigate to="/" />
    }

    return (
        <div>
            <DASH>
                <div className='ui dividing header'>
                    <h1>Log Out</h1>
                </div>
                <div>
                    <Button primary type='Logout' onClick={logoutUser}>LogOut</Button>
                </div>
            </DASH>
        </div >
    );
};

export default LogOut;