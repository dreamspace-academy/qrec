import React, { useEffect, useState } from 'react';
import { Table, Icon, Header, Form, Button } from 'semantic-ui-react'
import AttenDataService from "../services/attendance.services";


const options = [
    { key: 'n', text: 'Name', value: 'name' },
    { key: 'i', text: 'ID', value: 'id' },
]

const Attendance = ({ getStaffId }) => {

    const [attendance, setAttendance] = useState([]);

    useEffect(() => {
        getStaffs();
    }, [])

    const getStaffs = async () => {
        const data = await AttenDataService.getAllAttendance();
        console.log(data.docs);
        setAttendance(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };

    return (
        <div className='container-fluid Scroll'>
            <div className='ui dividing header'>
                <h1>Attendance Management</h1>
            </div>
            {/* <pre>{JSON.stringify(staffs, undefined, 2)}</pre> */}
            <div  >
                <Header as='h3' block >
                    <Form>
                        <Form.Group inline className='ui center aligned container'>
                            <Form.Select inline
                                fixed
                                label='Search by'
                                options={options}
                                placeholder='Search by'
                                width={5}
                            />
                            <Form.Input fluid label='' placeholder='Type Here' width={7} />
                            <Button secondary icon>
                                <Icon inline name='search' />
                            </Button>
                        </Form.Group>
                        <hr />
                        <Form.Group inline>
                            <Form.Input label='Date' placeholder='xx' width={6} type='number' />
                            <Form.Input label='Month' placeholder='xx' width={4} type='number' />
                            <Form.Input label='Year' placeholder='xxxx' width={6} type='number' />
                            <Button secondary>Filter</Button>
                        </Form.Group>
                    </Form>

                </Header>
            </div>
            <br />
            <div>
                {attendance.map((doc) => {
                    return (
                        <Table celled>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>ID</Table.HeaderCell>
                                    <Table.HeaderCell>Name</Table.HeaderCell>
                                    <Table.HeaderCell>Department</Table.HeaderCell>
                                    <Table.HeaderCell>Time</Table.HeaderCell>
                                    <Table.HeaderCell>Status</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body key={doc.id}>

                                <Table.Row>
                                    <Table.Cell>{doc.staff}</Table.Cell>
                                    <Table.Cell>{doc.name}</Table.Cell>
                                    <Table.Cell>{doc.department}</Table.Cell>
                                    <Table.Cell>{doc.time}</Table.Cell>
                                    <Table.Cell >

                                        {doc.present}
                                    </Table.Cell>
                                </Table.Row>

                            </Table.Body>

                        </Table>
                    )
                })}
            </div>
        </div>
    )




};

export default Attendance