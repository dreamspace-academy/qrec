import React from 'react';
import DASH from '../components/Dash-bord';
import '../page-styles/Staff.css'
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../services/Auth';
import { Header, Icon, Button, Form } from 'semantic-ui-react'

const Settings = () => {

  if (!isAuthenticated()) {
    return <Navigate to="/" />
  }

  return (
    <div>
      <DASH>
        <div className='page'>
          <div className="ui dividing header">

            <Header as='h1'>
              <Icon name='settings' />
              <Header.Content>
                Account Settings
                <Header.Subheader>Manage your preferences</Header.Subheader>
              </Header.Content>
            </Header>

          </div>

          <br></br>

          <div >
            <h2>Change Password</h2>
          </div>

          <br></br>

          <Form>

            <Form.Field>
              <label>Current Password</label>
              <input placeholder='Current password' />
            </Form.Field>

            <Form.Field>
              <label>New Password</label>
              <input placeholder='New password' />
            </Form.Field>

            {/* <Form.Field>
            <label>Confirm Password</label>
            <input placeholder='Confirm password' />
          </Form.Field> */}

            <br />
            <Button primary type='confirm'>Confirm</Button>
          </Form>
        </div>

      </DASH>
    </div>
  );
};

export default Settings;