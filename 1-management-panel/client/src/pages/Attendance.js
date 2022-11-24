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
                        <Form.Input label='Date' placeholder='xx' width={6}  type='number'   />
                        <Form.Input label='Month' placeholder='xx' width={4} type='number'  />
                        <Form.Input label='Year' placeholder='xxxx' width={6} type='number'  />
                        <Button secondary>Filter</Button>
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