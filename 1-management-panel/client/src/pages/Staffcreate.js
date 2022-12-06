import React, { useState } from 'react'
import { Form, Input, TextArea, Button, Select, Divider, Image, Message } from 'semantic-ui-react';
import { Alert } from 'react-bootstrap';
import StaffDataService from '../services/staffs.services';

const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

const Staffcreate = () => {
  const [profile, setProfile] = useState("");
  const [staff, setStaff] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [dob, setDob] = useState("");
  const [job, setJob] = useState("");
  const [gender, setGender] = useState("");
  const [remark, setRemark] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (
      staff === "" ||
      fname === "" ||
      lname === "" ||
      email === "" ||
      phone === "" ||
      department === "" ||
      dob === "" ||
      job === "" ||
      gender === "" ||
      remark === ""
    ) {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }

    const newStaff = {
      staff,
      fname,
      lname,
      email,
      department,
      job,
      dob,
      gender,
      phone,
      remark

    }
    console.log(newStaff);

    try {
      await StaffDataService.addStaffs(newStaff);
      setMessage({ error: false, msg: "Staff added sucessfully" })
    } catch (err) {
      setMessage({ error: true, msg: err.message });

    }

    setStaff("");
    setFname("");
    setLname("");
    setEmail("");
    setDepartment("");
    setJob("");
    setDob("");
    setGender("");
    setPhone("");
    setRemark("");

    this.props.history.push("/about")

  };




  return (

    <div className='container-fluid Scroll'>
      <div className='ui dividing header'>

        <h1>Staff Registation</h1>
      </div>

      {message?.msg && (
        <Alert
          variant={message?.error ? "danger" : "success"}
          dismissble
          onClose={() => setMessage("")}
        >
          {" "}
          {message?.msg}
        </Alert>
      )}



      <Form onSubmit={handleSubmit} success>

        <div class="ui focus input">
          <input type="file" placeholder="Search..." />
          <img src="" alt="" typeof='preview'/>
        </div> <br />

        <Form.Group widths='equal'>
          <Form.Field
            id='form-input-control-staff-id'
            control={Input}
            label='Staff ID'
            placeholder='Staff ID'
            value={staff}
            onChange={(e) => setStaff(e.target.value)}
          />
          <Form.Field
            id='form-input-control-error-email'
            control={Input}
            label='Email'
            placeholder='joe@schmoe.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Field
            id='form-input-control-first-name'
            control={Input}
            label='First name'
            placeholder='First name'
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
          <Form.Field
            id='form-input-control-phone-number'
            control={Input}
            label='Phone Number'
            placeholder='xxx xxxxxxx'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field
            id='form-input-control-last-name'
            control={Input}
            label='Last name'
            placeholder='Last name'
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
          <Form.Field
            id='form-input-control-lab-name'
            control={Input}
            label='Department'
            placeholder='Lab'
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Field
            id='form-input-control-dateofbirth-name'
            control={Input}
            label='D.O.B'
            placeholder='Date of Birth'
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <Form.Field
            id='form-input-control-role-name'
            control={Input}
            label='Job Role'
            placeholder='role'
            value={job}
            onChange={(e) => setJob(e.target.value)}
          />
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            // options={genderOptions}
            label='Gender'
            placeholder='Gender'
            // search
            // searchInput={{ id: 'form-select-control-gender' }}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <Form.Field
            id='form-input-control-remark-name'
            control={TextArea}
            label='Remarks'
            placeholder='text'
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
          />
          
        </Form.Group>
        
        {/* <Message
          success
          header='Form Completed'
          content="You're all signed up for the newsletter"
        /> */}
        


        <Button className='ui blue button' type='submit'>
          Add
        </Button>
      </Form>
      <br /><br /><br />
    </div>
  )
}
export default Staffcreate;
