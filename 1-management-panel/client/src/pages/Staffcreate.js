import React from 'react'
import { Form, Input, TextArea, Button, Select, Divider } from 'semantic-ui-react';


const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

const Staffcreate = () => {return( 
  <div>
    <div className='ui dividing header'>
      <h1>Staff Registation</h1>
    </div>        
  <Form>
    <Form.Group widths='equal'>
    <Form.Field
        id='form-input-control-staff-id'
        control={Input}
        label='Staff ID'
        placeholder='Staff ID'
      />
      <Form.Field
      id='form-input-control-error-email'
      control={Input}
      label='Email'
      placeholder='joe@schmoe.com'
      
    />
    </Form.Group>
  
    <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='First name'
        placeholder='First name'
      />
      <Form.Field
        id='form-input-control-phone-number'
        control={Input}
        label='Phone Number'
        placeholder='xxx xxxxxxx'
      />
      </Form.Group>
      <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-last-name'
        control={Input}
        label='Last name'
        placeholder='Last name'
      />
      <Form.Field
        id='form-input-control-lab-name'
        control={Input}
        label='Department'
        placeholder='Lab'
      />
      </Form.Group>

      <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-dateofbirth-name'
        control={Input}
        label='D.O.B'
        placeholder='Date of Birth'
      />
      <Form.Field
        id='form-input-control-role-name'
        control={Input}
        label='Job Role'
        placeholder='role'
      />
      </Form.Group>

      <Form.Group widths='equal'>
      <Form.Field
        control={Select}
        options={genderOptions}
        label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
        placeholder='Gender'
        search
        searchInput={{ id: 'form-select-control-gender' }}
      />
      <Form.Field
        id='form-input-control-remark-name'
        control={TextArea}
        label='Remark'
        placeholder='text'

      />
       </Form.Group>
    
    
    
    <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Registor'
      label='Confirm Details and Registor'
    />
  </Form>
  </div>
)
    }
export default Staffcreate;
