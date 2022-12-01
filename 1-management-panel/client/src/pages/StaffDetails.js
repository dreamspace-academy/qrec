import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, TextArea, Button, Select, Divider, Image } from 'semantic-ui-react';

const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

const StaffDetails = () => {
  return (
    <div className='container-fluid Scroll'>
      <div className='ui dividing header'>
        <h1>Staff Detail
          <button className='ui black mini button right floated '>
            <i aria-hidden="true" class=" trash large icon" id="addStaff">
            </i>
          </button>
        </h1>

      </div>
      <Image
        src='https://react.semantic-ui.com/images/avatar/large/matthew.png'
        control={Input}
        size='medium'
        centered 
        rounded /> <br />
      <Form >
        <Form.Group widths='equal'>
          <Form.Field
            id='form-input-control-staff-id'
            control={Input}
            label='Staff ID'
            placeholder='Staff ID'
            readOnly
          />
          <Form.Field
            id='form-input-control-error-email'
            control={Input}
            label='Email'
            placeholder='joe@schmoe.com'
            readOnly
          />
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Field
            id='form-input-control-first-name'
            control={Input}
            label='First name'
            placeholder='First name'
            readOnly
          />
          <Form.Field
            id='form-input-control-phone-number'
            control={Input}
            label='Phone Number'
            placeholder='xxx xxxxxxx'
            readOnly
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field
            id='form-input-control-last-name'
            control={Input}
            label='Last name'
            placeholder='Last name'
            readOnly
          />
          <Form.Field
            id='form-input-control-lab-name'
            control={Input}
            label='Department'
            placeholder='Lab'
            readOnly
          />
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Field
            id='form-input-control-dateofbirth-name'
            control={Input}
            label='D.O.B'
            placeholder='Date of Birth'
            readOnly
          />
          <Form.Field
            id='form-input-control-role-name'
            control={Input}
            label='Job Role'
            placeholder='role'
            readOnly
          />
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='Gender'
            placeholder='Gender'
            readOnly
          />
          <Form.Field
            id='form-input-control-remark-name'
            control={TextArea}
            label='Remark'
            placeholder='text'
            readOnly
          />
        </Form.Group>


        <Link to={'/staffedit'}>
          <Form.Field
            id='form-button-control-public'
            control={Button}
            content='Edit'
          />
        </Link>
      </Form>
      <br /><br /><br /><br />
    </div>
  )
}
export default StaffDetails;
