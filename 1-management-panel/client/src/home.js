import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Home.css";
import DASH from "./Components/Dash-bord";
import All from "./pages/Dashboard";
import Staff from './pages/Staff';
import Attendance from './pages/Attendance';
import Settings from './pages/Settings';
import Loginpage from './pages/Loginpage';
import Add from './pages/Staffcreate';
import Details from "./pages/StaffDetails";
import Edit from './pages/Editstaff1';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

const Home = () => {

    const [staffId, setStaffId] = useState("");

    const getStaffIdHandler = (id) => {
        console.log("ID of the selected staff is :", id)
        setStaffId(id);        
    }
    
    return (
        <div className="container-fluid m-0 p-0 float-start">
            <Router>
                <DASH>
                    <Switch>
                        <Route exact path="/">
                            <All />
                        </Route>
                        <Route path="/about">
                            <Staff getStaffId={getStaffIdHandler}/>
                        </Route>
                        <Route path="/Attendance">
                            <Attendance />
                        </Route>
                        <Route path="/settings">
                            <Settings />
                        </Route>
                        <Route path="/login">
                            <Loginpage />
                        </Route>
                        <Route path="/addStaff">
                            <Add />
                        </Route>
                        <Route path="/staffdetails">
                            <Details id={staffId} setStaffId={setStaffId}/>
                        </Route> 
                        <Route path="/staffedit">
                            <Edit id={staffId} setStaffId={setStaffId}/>
                        </Route>   
                    </Switch>
                </DASH>
            </Router>
        </div>
    );
}
export default Home;