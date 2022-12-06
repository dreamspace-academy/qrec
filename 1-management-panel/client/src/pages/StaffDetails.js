import { doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, TextArea, Button, Select, Divider, Image } from 'semantic-ui-react';
import StaffDataService from "../services/staffs.services";

const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

const StaffDetails = ({ id, getStaffId }) => {
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

  const idHandler = async (id) => {
    try {
      const docSnap = await StaffDataService.getStaff(id);
      console.log("The selected id is : ", docSnap.data())
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  }



  return (
    <div className='container-fluid Scroll'>

      <div className='ui dividing header'>
        <h1>Staff Details
          {/* <Button
            className='ui mini icon negative button right floated '
            onClick={(e) => deleteHandler(doc.id)}>
            <i aria-hidden="true" class=" trash large icon" id="addStaff">
            </i>
          </Button> */}
          <Link to={'/qrgenerate'}>
            <Button
              className='ui mini icon black button right floated'
              onClick={idHandler}>
              Generate &nbsp; <i aria-hidden="true" class=" qrcode large icon" id="addStaff"></i>
            </Button>
          </Link>
        </h1>

      </div>

      <div>

        <Image
          Input
          src='https://react.semantic-ui.com/images/avatar/large/matthew.png'
          control={Input}
          size='medium'
          centered
          rounded
          key={doc.id} /> <br />
        <Form key={doc.id}>
          <Form.Group widths='equal'>
            <Form.Field
              id='form-input-control-staff-id'
              control={Input}
              label='Staff ID'
              value={staff}
              placeholder={doc.staff}
              onChange={(e) => setStaff("")}
              readOnly
            />
            <Form.Field
              id='form-input-control-error-email'
              control={Input}
              label='Email'
              value={email}
              placeholder={doc.email}
              readOnly
            />
          </Form.Group>

          <Form.Group widths='equal'>
            <Form.Field
              id='form-input-control-first-name'
              control={Input}
              label='First name'
              value={fname}
              placeholder={doc.fname}
              readOnly
            />
            <Form.Field
              id='form-input-control-phone-number'
              control={Input}
              label='Phone Number'
              value={phone}
              placeholder={doc.phone}
              readOnly
            />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field
              id='form-input-control-last-name'
              control={Input}
              label='Last name'
              value={lname}
              placeholder={doc.lname}
              readOnly
            />
            <Form.Field
              id='form-input-control-lab-name'
              control={Input}
              label='Department'
              value={department}
              placeholder={doc.department}
              readOnly
            />
          </Form.Group>

          <Form.Group widths='equal'>
            <Form.Field
              id='form-input-control-dateofbirth-name'
              control={Input}
              label='D.O.B'
              value={dob}
              placeholder={doc.dob}
              readOnly
            />
            <Form.Field
              id='form-input-control-role-name'
              control={Input}
              label='Job Role'
              value={job}
              placeholder={doc.job}
              readOnly
            />
          </Form.Group>

          <Form.Group widths='equal'>
            <Form.Field
              control={Input}
              label='Gender'
              value={gender}
              placeholder={doc.gender}
              readOnly
            />
            <Form.Field
              id='form-input-control-remark-name'
              control={TextArea}
              label='Remark'
              value={remark}
              placeholder={doc.remark}
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
      </div>

      <br /><br /><br /><br />
    </div>
  )
}
export default StaffDetails;
