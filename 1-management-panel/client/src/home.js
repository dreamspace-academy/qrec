import Dash from './Dash-board'
import StaffDeatils from './Staff';
import Settings from './Setting';
import Attend from './Attendance';
import View from './Viewall';
import "./Home.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home = () => {
    return (
        <Router>
            <div className='body-page'>
                <Dash />
                {/* import your jsx file bellow */}
                <div className='Routing-content bg-dark border-0 rounded'>
                    <Switch>
                        <Route exact path="/">
                            <View />
                        </Route>
                        <Route exact path="/Attend">
                            <Attend />
                        </Route>
                        <Route exact path="/staff">
                            <StaffDeatils />
                        </Route>
                        <Route exact path="/Settings">
                            <Settings />
                        </Route>
                        
                    </Switch>
                </div>
            </div>

        </Router>
    );
}
export default Home;