import '../page-styles/Staff.css'
import StaffDataService from "../services/staffs.services";
import ProfileDataService from "../services/staffs.services";
import DASH from '../components/Dash-bord';
import React, { useEffect, useState } from 'react';
import { Image, Button } from 'semantic-ui-react'
import { isAuthenticated } from '../services/Auth';
import { Link, Navigate } from 'react-router-dom';

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
        await StaffDataService.deleteStaff(id);
        getStaffs();
        window.location.reload(false);
    }

    if (!isAuthenticated()) {
        return <Navigate to="/" />
    }

    return (
        <div >
            <DASH>
                <div className='ui dividing header'>
                    <h1>Staff Management
                        <Link to={'/addstaff'}>
                            <Button className='ui black small compact button right floated'>
                                Add &nbsp; <i aria-hidden="true" className=" user plus icon " id="addStaff">
                                </i>
                            </Button>
                        </Link>
                    </h1>
                </div>
                <div>
                    <div className='ui five cards'>
                        {staffs.map((doc) => {
                            return (
                                <div class="ui card" key={doc.id}>

                                    <Link to="/staffdetails" style={{ textDecoration: 'none' }}>
                                        <div
                                            className='ui basic button center aligned container'
                                            onClick={(e) => getStaffId(doc.id)}
                                        >
                                            <div class="image">
                                                <Image src={doc.imgUrl} rounded />
                                            </div>
                                            <div class="ui large header">{doc.fname}</div><hr />
                                            <div class="description">{doc.job}</div>
                                            <div className='ui extra content'>ID : {doc.staff}</div>
                                        </div>
                                    </Link>

                                    <div className="ui content fluid container ">
                                        <div className="ui">
                                            {/* <Link to={'/qrview'}>
                                            <div
                                                className='ui tiny black circular icon button left floated item'>
                                                <i aria-hidden="true" class=" qrcode solid large icon" id="addStaff">
                                                </i>
                                            </div>
                                        </Link> */}
                                            <div
                                                className='ui tiny icon red button center aligned container '
                                                onClick={(e) => deleteHandler(doc.id)}>
                                                <i aria-hidden="true" class=" trash large icon" id="addStaff"></i>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            );
                        })}
                    </div>

                </div>
                <br /><br /><br /><br />
            </DASH>
        </div >
    );
};

export default Staff;
