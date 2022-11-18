import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Home.css";
import DASH from "./Components/Dash-bord";
import All from "./pages/Dashboard";
import Staff from './pages/Staff';
import Attendance from './pages/Attendance';
import Settings from './pages/Settings';
import Product from './pages/Product';

const Home = () => {
    return (
        
            
                <Router>
            <DASH>
            <Switch>
                    <Route exact path="/">
                        <All/>
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
                        <Product />
                    </Route>
            </Switch>
            </DASH>
                </Router>
            
        
    );
}
export default Home;