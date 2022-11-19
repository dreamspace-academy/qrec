import React from 'react';
import img from "../images/logo.png"


const Settings = () => {
    return (
        <div>
            <div className='ui dividing header'>
                <h1>Settings</h1>
            </div>

            <div class="card" style={{ "width": "100%" }}>
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>


        </div>
    );
};

export default Settings;