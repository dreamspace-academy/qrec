import React, { useEffect, useState } from 'react';
import { Table, Icon, Header, Form, Button, Card } from 'semantic-ui-react'
import AttenDataService from "../services/attendance.services";


const options = [
    { key: 'n', text: 'Name', value: 'name' },
    { key: 'i', text: 'ID', value: 'id' },
]



const Attendance = ({ getStaffId, onSearchFilterSelected }) => {

    const [attendance, setAttendance] = useState([]);
    const [name, setName] = useState("");
    const [staffID, setStaffID] = useState("");
    const [date, setDate] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");

    useEffect(() => {
        getAttendance();
        // searchFilter();
        // dateFilter();
        // selectFilter();
    }, [])

    const getAttendance = async () => {
        const data = await AttenDataService.getAllAttendance();
        console.log(data.docs);
        setAttendance(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };

    // const searchFilter = async (e) => {
    //     console.log(search)
    // }

    // const searchFunction = function() {
    //     if (name !== "" || name !== undefined) {
    //         return doc.name.includes(name)
    //     } else if (staffID !== "" || staffID !== undefined) {
    //         return doc.StaffID.includes(staffID)
    //     }
    // } 

    const dateFilter = async (e) => {
        console.log(year, month, date)
    }

    // const selectFilter = async (e) => {
    //     console.log(select)
    // }

    return (
        <div className='container-fluid Scroll'>

            <div className='ui dividing header'>
                <h1>Attendance Management</h1>
            </div>
            {/* <pre>{JSON.stringify(attendance, undefined, 2)}</pre> */}
            <div  >
                <Header as='h3' block >
                    <form className='ui form' >
                        <Form.Group inline className='ui center aligned container'>

                            <Form.Input
                                className='ui input center aligned container'
                                fluid
                                label='Search by Staff ID'
                                placeholder='Type Here'
                                width={6}
                                onChange={(e) => setStaffID(e.target.value)}
                            />
                            <Form.Input
                                className='ui input center aligned container'
                                fluid
                                label='Search by Name'
                                placeholder='Type Here'
                                width={6}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {/* <Button secondary icon type='submit' >
                                <Icon inline name='search' />
                            </Button> */}
                        </Form.Group>
                    </form>
                    <hr />
                    <form className='ui form' >
                        <Form.Group inline>
                            <Form.Input label='Date' placeholder='xx' width={6} type='number' onChange={(e) => setDate(e.target.value)} />
                            <Form.Input label='Month' placeholder='xx' width={4} type='number' onChange={(e) => setMonth(e.target.value)} />
                            <Form.Input label='Year' placeholder='xxxx' width={6} type='number' onChange={(e) => setYear(e.target.value)} />
                            <Button secondary onClick={dateFilter}>Filter</Button>
                        </Form.Group>
                    </form>

                </Header>
            </div>
            <br />
            <div>
                <div>
                    <Table celled >
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Date</Table.HeaderCell>
                                <Table.HeaderCell>ID</Table.HeaderCell>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>Department</Table.HeaderCell>
                                <Table.HeaderCell>Time</Table.HeaderCell>
                                <Table.HeaderCell>Status</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        {attendance
                            .filter((doc) => {
                                return (
                                    doc.StaffID.includes(staffID) &&
                                    doc.name.includes(name) 
                                )        
                            })
                            .map((doc) => {
                                return (
                                    <Table.Body >
                                        <Table.Row>
                                            <Table.Cell>{doc.Date}</Table.Cell>
                                            <Table.Cell>{doc.StaffID}</Table.Cell>
                                            <Table.Cell>{doc.name}</Table.Cell>
                                            <Table.Cell>{doc.department}</Table.Cell>
                                            <Table.Cell>{doc.time}</Table.Cell>
                                            <Table.Cell positive><Icon name='checkmark' />Present</Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                )
                            })}
                    </Table>
                </div>
                <br />
                <br />
            </div>
        </div>
    )




};

export default Attendance