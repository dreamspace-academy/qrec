import React, { useEffect, useState } from 'react';
import { Table, Icon, Header, Form } from 'semantic-ui-react'
import AttenDataService from "../services/attendance.services";

const Attendance = ({ getStaffId }) => {

    const [attendance, setAttendance] = useState([]);
    const [name, setName] = useState("");
    const [staffID, setStaffID] = useState("");
    const [date, setDate] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");

    useEffect(() => {
        getAttendance();
    }, [])

    const getAttendance = async () => {
        const data = await AttenDataService.getAllAttendance();
        console.log(data.docs);
        setAttendance(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };

    return (
        <div>
            <div className='ui dividing header'>
                <h1>Attendance Management</h1>
            </div>
            {/* <pre>{JSON.stringify(attendance, undefined, 2)}</pre> */}
            <div  >
                <Header as='h3' block >
                    <Form className='ui form' >
                        <div className='ui small header center aligned item '> Search By :</div>  <hr />
                        <Form.Group inline >

                            <Form.Input
                                className='ui input center aligned container'
                                label='StaffID'
                                placeholder='Type Here'
                                width={6}
                                onChange={(e) => setStaffID(e.target.value)}
                            />
                            <Form.Input
                                className='ui input center aligned container'
                                label='Name'
                                placeholder='Type Here'
                                width={6}
                                onChange={(e) => setName(e.target.value)}
                            />

                        </Form.Group>
                    </Form>

                    <Form className='ui form' >
                        <Form.Group inline>
                            <Form.Input
                                label='Date'
                                placeholder='xx'
                                width={6}
                                type='number'
                                onChange={(e) => setDate(e.target.value)} />
                            <Form.Input
                                label='Month'
                                placeholder='xx'
                                width={4}
                                type='number'
                                onChange={(e) => setMonth(e.target.value)} />
                            <Form.Input
                                label='Year'
                                placeholder='xxxx'
                                width={6}
                                type='number'
                                onChange={(e) => setYear(e.target.value)} />
                        </Form.Group>
                    </Form>
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
                                    doc.StaffID.includes(staffID)
                                    &&
                                    doc.name.includes(name)
                                    &&
                                    doc.Year.includes(year)
                                    &&
                                    doc.Month.includes(month)
                                    &&
                                    doc.date_only.includes(date)
                                )
                            })

                            .map((doc) => {
                                return (
                                    <Table.Body >
                                        <Table.Row>
                                            <Table.Cell>{doc.Year}-{doc.Month}-{doc.date_only}</Table.Cell>
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