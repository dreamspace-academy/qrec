import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Image, Reveal, Button } from 'semantic-ui-react'
import { storage } from '../firebase-config';
import '../PageStyle/Staff.css'
import StaffDataService from "../services/staffs.services";
import ProfileDataService from "../services/staffs.services";


const Staff = ({ getStaffId }) => {

    const [staffs, setStaffs] = useState([]);

    useEffect(() => {
        getStaffs();
    }, [])

    const getStaffs = async () => {
        const data = await StaffDataService.getAllStaffs() || await ProfileDataService.getAllProfiles();       
        console.log(data.docs);
        setStaffs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };

    const deleteHandler = async (id) => {
        await StaffDataService.deleteStaff(id) || await ProfileDataService.getAllProfiles(storage);
        getStaffs();
    }

    return (
        <div className='container-fluid Scroll'>
            <div className='ui dividing header'>
                <h1>Staff Management
                    <Link to={'/addstaff'}>
                        <Button className='ui black small compact button right floated '>
                            Add &nbsp; <i aria-hidden="true" className=" user plus icon " id="addStaff">
                            </i>
                        </Button>
                    </Link>
                </h1>
            </div>
            {/* <pre>{JSON.stringify(staffs, undefined, 2)}</pre> */}
            <div>
                <div className='ui five cards'>
                    {staffs.map((doc) => {
                        return (
                            <div class="ui card" key={doc.id}>
                                {/* <div class="content"></div> */}

                                <Link to="/staffdetails" style={{ textDecoration: 'none' }}>
                                    <div
                                        className='ui basic button center aligned container inline'
                                        onClick={(e) => getStaffId(doc.id)}
                                    >
                                        <div class="image">
                                            <Image src={doc.imgUrl} />
                                        </div>
                                        <div class="ui large header">{doc.fname}</div><hr />
                                        {/* <div class="description">{doc.email}</div> */}
                                        <div class="description">{doc.job}</div>

                                        <div className='ui extra content'>ID : {doc.staff}</div>
                                    </div>
                                </Link>

                                <div className="ui content fluid inline container">
                                    <div className="ui container">
                                        {/* <Link to={'/qrview'}>
                                            <div
                                                className='ui tiny black circular icon button left floated item'>
                                                <i aria-hidden="true" class=" qrcode solid large icon" id="addStaff">
                                                </i>
                                            </div>
                                        </Link> */}
                                        <div
                                            className='ui tiny circular icon red button center aligned container '
                                            onClick={(e) => deleteHandler(doc.id)}>
                                            <i aria-hidden="true" class=" trash large icon" id="addStaff">
                                            </i>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        );
                    })}
                </div>

            </div>
            <br /><br /><br /><br />
        </div >
    );
};

export default Staff;
