import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { Form, Input, TextArea, Button, Image } from 'semantic-ui-react';
import StaffDataService from "../services/staffs.services";
import { Alert } from 'react-bootstrap';


const StaffEdit = ({ id, setStaffId }) => {

  const [imgUrl, setImgUrl] = useState("");
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
      if (id !== undefined && id !== "") {
        await StaffDataService.updateStaff(id, newStaff);
        setStaffId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message })
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

  };

  const detailsHandler = async () => {
    setMessage("");
    try {
      const docSnap = await StaffDataService.getStaff(id);
      console.log("The record is : ", docSnap.data())
      setStaff(docSnap.data().staff);
      setImgUrl(docSnap.data().imgUrl);
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
  // useEffect(() => {
  //   getStaffs();
  // }, [])

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

      <Image
        Input
        src={imgUrl}
        control={Input}
        size='medium'
        centered
        rounded /> <br />

      <Form onSubmit={handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Field
            id='form-input-control-staff-id'
            control={Input}
            label='Staff ID'

            value={staff}
            onChange={(e) => setStaff(e.target.value)}
          />
          <Form.Field
            id='form-input-control-error-email'
            control={Input}
            label='Email'

            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Field
            id='form-input-control-first-name'
            control={Input}
            label='First name'

            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
          <Form.Field
            id='form-input-control-phone-number'
            control={Input}
            label='Phone Number'

            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field
            id='form-input-control-last-name'
            control={Input}
            label='Last name'

            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
          <Form.Field
            id='form-input-control-lab-name'
            control={Input}
            label='Department'

            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Field
            id='form-input-control-dateofbirth-name'
            control={Input}
            label='D.O.B'

            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <Form.Field
            id='form-input-control-role-name'
            control={Input}
            label='Job Role'

            value={job}
            onChange={(e) => setJob(e.target.value)}
          />
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='Gender'

            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <Form.Field
            id='form-input-control-remark-name'
            control={TextArea}
            label='Remarks'

            value={remark}
            onChange={(e) => setRemark(e.target.value)}
          />
        </Form.Group>

        {/* <Link to={'/staffdetails'}></Link> */}
        <Button className='ui blue button' type='submit'>
          Update
        </Button>

      </Form>
      <br /><br /><br />
    </div>
  )
}
export default StaffEdit;
