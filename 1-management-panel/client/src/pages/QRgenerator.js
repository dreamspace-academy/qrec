import React, { useState, useRef, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { doc } from 'firebase/firestore';
import StaffDataService from "../services/staffs.services";
import { Form, Input, TextArea, Button, Select, Divider, Image } from 'semantic-ui-react';

const QrCode = ({ id, setStaffId }) => {
  

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
    if (id !== undefined || id !== "") {
      detailsHandler();
    }
  }, [id])

  const [staffs, setStaffs] = useState([]);
  useEffect(() => {
    getStaffs();
  }, [id])

  const getStaffs = async () => {
    const data = await StaffDataService.getStaffs();
    console.log(data.docs);
    setStaffs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  };

  const [url, setUrl] = useState("");
  const qrRef = useRef();
  const downloadQRCode = async(e) => {
    // await delay(1000);
    e.preventDefault();
    let canvas = qrRef.current.querySelector("canvas");
    let image = canvas.toDataURL("image/png");
    let anchor = document.createElement("a");
    anchor.href = image;
    anchor.download = "qr.png";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    setUrl("");
  };

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const qrCodeEncoder = async (e) => {
    setUrl(e.target.value);
  };

  const qrcode = (
    <QRCodeCanvas
      value={url}
      size={300}
      bgColor={"#ffffff"}
      level={"H"}
    />
  );
  return (
    <div>
      <div className="ui dividing header">
        <h1>QR Generator</h1>
      </div>

      <div className="qrcode__container">
        <div ref={qrRef}>{qrcode}</div>
        <br />
        <div className="input__group">
          <Form key={doc.id} onSubmit={downloadQRCode} >
            <label>Staff ID : &nbsp; </label>
            <input
              className="ui focus input"
              type="text"
              control={Input}
              defaultValue={staff}
              onMouseMove={qrCodeEncoder}
              readOnly
            /> &nbsp; <br />
            <button type="submit" disabled={!staff} className="ui blue button">
              
              Download
            </button>
          </Form>
        </div>
      </div>
    </div>

  );
};

export default QrCode;