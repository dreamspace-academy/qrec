import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Home.css";
import DASH from "./Components/Dash-bord";
import All from "./pages/Dashboard";
import Staff from './pages/Staff';
import Attendance from './pages/Attendance';
import Settings from './pages/Settings';
import LogOut from './pages/LogOut';
import Loginpage from './pages/Loginpage';
import Add from './pages/Staffcreate';
import Details from "./pages/StaffDetails";
import Edit from './pages/Editstaff1';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (

        <div className="container-fluid m-0 p-0 float-start">
            <Router>
                <DASH>
                    <Switch>
                        <Route exact path="/">
                            <All />
                        </Route>
                        <Route path="/about">
                            <Staff />
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
                            <Details />
                        </Route> 
                        <Route path="/staffedit">
                            <Edit />
                        </Route>   
                    </Switch>
                </DASH>
            </Router>
        </div>
    );
}
export default Home;