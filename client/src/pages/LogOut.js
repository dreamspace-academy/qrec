import React from 'react';
import { logout } from '../services/Auth';
import { Header, Icon, Button, Form } from 'semantic-ui-react'
import { isAuthenticated } from '../services/Auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import DASH from '../Components/Dash-bord';

const LogOut = () => {

    return (
        <div>
            <DASH>
                <div className='ui dividing header'>
                    <h1>Log Out</h1>
                </div>
                <div>
                    <Button primary type='Logout' onClick={logout()}>LogOut</Button>
                </div>
            </DASH>
        </div>
    );
};

export default LogOut;