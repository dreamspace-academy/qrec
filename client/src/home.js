import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Home.css";
import DASH from "./Components/Dash-bord";
import All from "./pages/Dashboard";
import Staff from './pages/Staff';
import Attendance from './pages/Attendance';
import Settings from './pages/Settings';
import Loginpage from './Components/Loginpage';
import Add from './pages/Staffcreate';
import Details from "./pages/StaffDetails";
import Edit from './pages/Editstaff';
import QrV from './pages/QRviewer';
import QrG from './pages/QRgenerator';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import LogOut from "./pages/LogOut";

const Home = () => {

    const [staffId, setStaffId] = useState("");

    const getStaffIdHandler = (id) => {
        console.log("ID of the selected staff is :", id)
        setStaffId(id);
    }

    const searchFilterSelected = (searchValue) => {
        console.log(searchValue)
    }

    return (
        <div className="container-fluid m-0 p-0 float-start">
            <Router>
                <DASH>
                    <Routes>
                        <Route path='/' element={<All />} />
                        <Route
                            path='/about'
                            element={<Staff getStaffId={getStaffIdHandler} />} />
                        <Route
                            path="/Attendance"
                            element={<Attendance
                                getStaffId={getStaffIdHandler}
                                onSearchFilterSelected={searchFilterSelected}
                            />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/login" element={<Loginpage />} />
                        <Route path="/logout" element={<LogOut />} />
                        <Route path="/qrview" element={<QrV />} />
                        <Route
                            path="/qrgenerate"
                            element={<QrG id={staffId} setStaffId={setStaffId} />} />
                        <Route path="/addStaff" element={<Add />} />
                        <Route
                            path="/staffdetails"
                            element={<Details id={staffId} setStaffId={setStaffId} />} />
                        <Route
                            path="/staffedit"
                            element={<Edit id={staffId} setStaffId={setStaffId} />} />
                    </Routes>
                </DASH>

            </Router>
        </div>
    );
}
export default Home;