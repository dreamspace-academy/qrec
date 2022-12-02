import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, TextArea, Button, Select, Divider, Image } from 'semantic-ui-react';
import StaffDataService from "../services/staffs.services";
import { doc } from 'firebase/firestore';


const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

const StaffEdit = ({ id, getStaffId }) => {

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

  const detailsHandler = async () => {
    setMessage("");
    try {
      const docSnap = await StaffDataService.getStaff(id);
      console.log("The record is : ", docSnap.data())
      setStaff(docSnap.data().staff);
      setFname(docSnap.data().fname);
      setLname(docSnap.data().lname);
      setEmail(docSnap.data().email);
      setDepartment(docSnap.data().department);
      setJob(docSnap.data().job);
      setDob(docSnap.data().dob);
      setGender(docSnap.data().gender);
      setPhone(docSnap.data().phone);
      setRemark(docSnap.data().remark);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  }

  useEffect(() => {
    console.log("The id here is:", id);
    if (id !== undefined && id !== "") {
      detailsHandler();
    }
  }, [id])

  const [staffs, setStaffs] = useState([]);
  useEffect(() => {
    getStaffs();

  }, [])

  const getStaffs = async () => {
    const data = await StaffDataService.getStaffs();
    console.log(data.docs);
    setStaffs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  };

  const deleteHandler = async (id) => {
    await StaffDataService.deleteStaff(id);
    getStaffs();
  }

  return (
    <div className='container-fluid Scroll'>
      <div className='ui dividing header'>
        <h1>Edit Staff</h1>
      </div>
      <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' control={Input} size='medium' centered rounded /> <br />
      <Form>
        <Form.Group widths='equal'>
          <Form.Field
            id='form-input-control-staff-id'
            control={Input}
            label='Staff ID'
            placeholder={doc.staff}
            value={staff}
            onChange={(e) => setStaff(e.target.value)}
          />
          <Form.Field
            id='form-input-control-error-email'
            control={Input}
            label='Email'
            placeholder={doc.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Field
            id='form-input-control-first-name'
            control={Input}
            label='First name'
            placeholder={doc.fname}
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
          <Form.Field
            id='form-input-control-phone-number'
            control={Input}
            label='Phone Number'
            placeholder={doc.phone}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field
            id='form-input-control-last-name'
            control={Input}
            label='Last name'
            placeholder={doc.lname}
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
          <Form.Field
            id='form-input-control-lab-name'
            control={Input}
            label='Department'
            placeholder={doc.department}
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Field
            id='form-input-control-dateofbirth-name'
            control={Input}
            label='D.O.B'
            placeholder={doc.dob}
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <Form.Field
            id='form-input-control-role-name'
            control={Input}
            label='Job Role'
            placeholder={doc.job}
            value={job}
            onChange={(e) => setJob(e.target.value)}
          />
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='Gender'
            placeholder={doc.gender}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <Form.Field
            id='form-input-control-remark-name'
            control={TextArea}
            label='Remarks'
            placeholder={doc.remark}
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
          />
        </Form.Group>

        <Link to={'/staffdetails'}>
          <Button className='ui blue button'>
            Update
          </Button>
        </Link>
      </Form>
      <br /><br /><br />
    </div>
  )
}
export default StaffEdit;
