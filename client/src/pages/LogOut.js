import React from 'react';
import { logout } from '../services/Auth';
import { Header, Icon, Button, Form } from 'semantic-ui-react'

const LogOut = () => {
    return (
        <div>
            <div className='ui dividing header'>
                <h1>Log Out</h1>
            </div>
            <div>
                <Button primary type='Logout' onClick={logout()}>LogOut</Button>
            </div>
        </div>
    );
};

export default LogOut;