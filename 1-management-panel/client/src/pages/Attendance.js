import React from 'react'
import { Table, Icon, Header, Form, Button } from 'semantic-ui-react'

const options = [
    { key: 'n', text: 'Name', value: 'name' },
    { key: 'i', text: 'ID', value: 'id' },
]

const TableExampleStriped = () => (

    <div className='container-fluid Scroll'>
        <div className='ui dividing header'>
            <h1>Attendance Management</h1>
        </div>

        <div >
            <Header as='h3' block>
                <Form>
                    <Form.Group widths='equal'>

                        <Form.Select
                            fluid
                            label=''
                            options={options}
                            placeholder='Search by'
                        />
                        <Form.Input fluid label='' placeholder='Type Here' />
                        <Button icon>
                            <Icon inline name='search' />
                        </Button>
                    </Form.Group>
                </Form>

            </Header>
        </div>
        <br />
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Department</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>001</Table.Cell>
                        <Table.Cell>Gunarakulan</Table.Cell>
                        <Table.Cell>Software Lab</Table.Cell>
                        <Table.Cell negative>
                            <Icon name='close' />
                            Absent
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>002</Table.Cell>
                        <Table.Cell>Ashathkavi</Table.Cell>
                        <Table.Cell>Software Lab</Table.Cell>
                        <Table.Cell positive>
                            <Icon name='checkmark' />
                            Present
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>003</Table.Cell>
                        <Table.Cell>Vinothraj</Table.Cell>
                        <Table.Cell>Software Lab</Table.Cell>
                        <Table.Cell negative>
                            <Icon name='close' />
                            Absent
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>001</Table.Cell>
                        <Table.Cell>Gunarakulan</Table.Cell>
                        <Table.Cell>Software Lab</Table.Cell>
                        <Table.Cell negative>
                            <Icon name='close' />
                            Absent
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>001</Table.Cell>
                        <Table.Cell>Gunarakulan</Table.Cell>
                        <Table.Cell>Software Lab</Table.Cell>
                        <Table.Cell negative>
                            <Icon name='close' />
                            Absent
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>001</Table.Cell>
                        <Table.Cell>Gunarakulan</Table.Cell>
                        <Table.Cell>Software Lab</Table.Cell>
                        <Table.Cell negative>
                            <Icon name='close' />
                            Absent
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>001</Table.Cell>
                        <Table.Cell>Gunarakulan</Table.Cell>
                        <Table.Cell>Software Lab</Table.Cell>
                        <Table.Cell negative>
                            <Icon name='close' />
                            Absent
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>001</Table.Cell>
                        <Table.Cell>Gunarakulan</Table.Cell>
                        <Table.Cell>Software Lab</Table.Cell>
                        <Table.Cell negative>
                            <Icon name='close' />
                            Absent
                        </Table.Cell>
                    </Table.Row>



                </Table.Body>
            </Table>
        </div>
    </div>

)

export default TableExampleStriped