import React, { useState, useRef, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { doc } from 'firebase/firestore';
import StaffDataService from "../services/staffs.services";
import { Form, Input, TextArea, Button, Select, Divider, Image } from 'semantic-ui-react';
import DASH from '../Components/Dash-bord';
import { isAuthenticated } from '../services/Auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const QrCode = ({ id, setStaffId }) => {

  const [staff, setStaff] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });

  const detailsHandler = async () => {
    setMessage("");
    try {
      const docSnap = await StaffDataService.getStaff(id);
      console.log("The record is : ", docSnap.data())
      setStaff(docSnap.data().staff);
      QrCreate(docSnap.data().staff);
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
  const downloadQRCode = async (e) => {
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

  const QrCreate = async (id) => {
    setUrl(id);
  }

  console.log(staff)

  const qrcode = (
    <QRCodeCanvas
      value={url}
      size={380}
      bgColor={"#F0F0F0"}
      level={"H"}
    />
  );

  if (!isAuthenticated()) {
    return <Navigate to="/" />
  }

  return (
    <div>
      <DASH>
        <div className="ui dividing header">
          <h1>QR Generator</h1>
        </div>

        <div className="ui qrcode center aligned container">
          <div ref={qrRef}>{qrcode}</div>
          <br />
          <div className="input__group">

            <Form key={doc.id}>
              <div className="ui small header" >
                Staff ID : &nbsp; &nbsp;
                <div class="ui input">
                  <input type="text" defaultValue={staff} value={staff} readOnly />
                </div>
              </div>
            </Form>

            <br />
            <br />

            <div onClick={downloadQRCode} type="submit" className="ui blue button">
              Download
            </div>

          </div>
        </div>
      </DASH>
    </div>

  );
};

export default QrCode;