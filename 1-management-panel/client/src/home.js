import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Home.css";
import DASH from "./Components/Dash-bord";
import All from "./pages/Dashboard";
import About from './pages/About';
import Analytics from './pages/Analytics';
import Comment from './pages/Comment';
import Product from './pages/Product';

const Home = () => {
    return (
        
            
                <Router>
            <DASH>
            <Switch>
                    <Route path="/">
                        <All/>
                        </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/Addendance">
                        <Analytics />
                    </Route>
                    <Route path="/Setting">
                        <Comment />
                    </Route>
                    <Route path="/Log-out">
                        <Product />
                    </Route>
            </Switch>
            </DASH>
                </Router>
            
        
    );
}
export default Home;