import React from 'react';
import { Header, Icon, Button, Checkbox, Form } from 'semantic-ui-react'

const Settings = () => {
  return (
    <div>
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
        <h3>Change Password</h3>
      </div>
      <br></br><br></br>
      <Form>
        <Form.Field>
          <label>Current Password</label>
          <input placeholder='Current password' />
        </Form.Field>
        <Form.Field>
          <label>New Password</label>
          <input placeholder='New password' />
        </Form.Field>
        <Form.Field>
          <label>Confirm Password</label>
          <input placeholder='Confirm password' />
        </Form.Field>

        <Button primary type='confirm'>Confirm</Button>
      </Form>
<br />
    

    </div>
  );
};

export default Settings;