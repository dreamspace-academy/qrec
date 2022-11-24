import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image, Reveal } from 'semantic-ui-react'
import '../PageStyle/Staff.css'


const Staff = () => {
    return (
        <div className='container-fluid Scroll'>

            <div className='ui dividing header'>
                <h1>Staff Management
                    <Link to={'/addstaff'}>
                        <button className='ui black mini button right floated '>
                            <i aria-hidden="true" class=" user plus large icon" id="addStaff">
                            </i>
                        </button>
                    </Link>
                </h1>
            </div>


            <div>
                <div className='ui five cards'>
              
                    <Card>
                   <img src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                       
                  <Card.Content>
                            <Card.Header> <Link to={'/staffdetails'} style={{ textDecoration: 'none' }}>Gunarakulan</Link></Card.Header>
                            <Card.Meta>
                                <span className='date'>Joined in 2015</span>
                            </Card.Meta>
                            <Card.Description>
                                Guardian
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                ID : 001
                            </a>
                        </Card.Content>
                        
                    </Card>
               
                   
                    <Card>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Ashathkavi</Card.Header>
                            <Card.Meta>
                                <span className='date'>Joined in 2018</span>
                            </Card.Meta>
                            <Card.Description>
                                Staff
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                ID : 002
                            </a>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Image src='https://ca.slack-edge.com/THANGN4NM-U0490NGVDBJ-d83cdb88edee-512' wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Vinothraj</Card.Header>
                            <Card.Meta>
                                <span className='date'>Joined in 2022</span>
                            </Card.Meta>
                            <Card.Description>
                                Trainee
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                ID : 003
                            </a>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Gunarakulan</Card.Header>
                            <Card.Meta>
                                <span className='date'>Joined in 2015</span>
                            </Card.Meta>
                            <Card.Description>
                                Guardian
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                ID : 001
                            </a>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Gunarakulan</Card.Header>
                            <Card.Meta>
                                <span className='date'>Joined in 2015</span>
                            </Card.Meta>
                            <Card.Description>
                                Guardian
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                ID : 001
                            </a>
                        </Card.Content>
                    </Card>
                </div>
                <div className='ui five cards'>
                    <Card>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Gunarakulan</Card.Header>
                            <Card.Meta>
                                <span className='date'>Joined in 2015</span>
                            </Card.Meta>
                            <Card.Description>
                                Guardian
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                ID : 001
                            </a>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Ashathkavi</Card.Header>
                            <Card.Meta>
                                <span className='date'>Joined in 2018</span>
                            </Card.Meta>
                            <Card.Description>
                                Staff
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                ID : 002
                            </a>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Image src='https://ca.slack-edge.com/THANGN4NM-U0490NGVDBJ-d83cdb88edee-512' wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Vinothraj</Card.Header>
                            <Card.Meta>
                                <span className='date'>Joined in 2022</span>
                            </Card.Meta>
                            <Card.Description>
                                Trainee
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                ID : 003
                            </a>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Gunarakulan</Card.Header>
                            <Card.Meta>
                                <span className='date'>Joined in 2015</span>
                            </Card.Meta>
                            <Card.Description>
                                Guardian
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                ID : 001
                            </a>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Gunarakulan</Card.Header>
                            <Card.Meta>
                                <span className='date'>Joined in 2015</span>
                            </Card.Meta>
                            <Card.Description>
                                Guardian
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                ID : 001
                            </a>
                        </Card.Content>
                    </Card>
                </div>
                <div className='ui five cards'>
                    <Card>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Gunarakulan</Card.Header>
                            <Card.Meta>
                                <span className='date'>Joined in 2015</span>
                            </Card.Meta>
                            <Card.Description>
                                Guardian
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                ID : 001
                            </a>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Ashathkavi</Card.Header>
                            <Card.Meta>
                                <span className='date'>Joined in 2018</span>
                            </Card.Meta>
                            <Card.Description>
                                Staff
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                ID : 002
                            </a>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Image src='https://ca.slack-edge.com/THANGN4NM-U0490NGVDBJ-d83cdb88edee-512' wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Vinothraj</Card.Header>
                            <Card.Meta>
                                <span className='date'>Joined in 2022</span>
                            </Card.Meta>
                            <Card.Description>
                                Trainee
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                ID : 003
                            </a>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Gunarakulan</Card.Header>
                            <Card.Meta>
                                <span className='date'>Joined in 2015</span>
                            </Card.Meta>
                            <Card.Description>
                                Guardian
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                ID : 001
                            </a>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Gunarakulan</Card.Header>
                            <Card.Meta>
                                <span className='date'>Joined in 2015</span>
                            </Card.Meta>
                            <Card.Description>
                                Guardian
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                ID : 001
                            </a>
                        </Card.Content>
                    </Card>
                </div>
                <div className='ui five cards'>
                    <Card>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Gunarakulan</Card.Header>
                            <Card.Meta>
                                <span className='date'>Joined in 2015</span>
                            </Card.Meta>
                            <Card.Description>
                                Guardian
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                ID : 001
                            </a>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Ashathkavi</Card.Header>
                            <Card.Meta>
                                <span className='date'>Joined in 2018</span>
                            </Card.Meta>
                            <Card.Description>
                                Staff
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                ID : 002
                            </a>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Image src='https://ca.slack-edge.com/THANGN4NM-U0490NGVDBJ-d83cdb88edee-512' wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Vinothraj</Card.Header>
                            <Card.Meta>
                                <span className='date'>Joined in 2022</span>
                            </Card.Meta>
                            <Card.Description>
                                Trainee
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                ID : 003
                            </a>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Gunarakulan</Card.Header>
                            <Card.Meta>
                                <span className='date'>Joined in 2015</span>
                            </Card.Meta>
                            <Card.Description>
                                Guardian
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                ID : 001
                            </a>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Gunarakulan</Card.Header>
                            <Card.Meta>
                                <span className='date'>Joined in 2015</span>
                            </Card.Meta>
                            <Card.Description>
                                Guardian
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                ID : 001
                            </a>
                        </Card.Content>
                    </Card>
                </div>
            
            </div>

        </div>
    );
};

export default Staff;