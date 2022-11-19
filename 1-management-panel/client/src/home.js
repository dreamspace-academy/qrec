import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Home.css";
import DASH from "./Components/Dash-bord";
import All from "./pages/Dashboard";
import Staff from './pages/Staff';
import Attendance from './pages/Attendance';
import Settings from './pages/Settings';
import LogOut from './pages/LogOut';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
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
                        <Route path="/logout">
                            <LogOut />
                        </Route>
                    </Switch>
                </DASH>
            </Router>
        </div>
    );
}
export default Home;