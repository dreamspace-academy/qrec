import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Home.css";
import DASH from "./Components/Dash-bord";
import All from "./pages/Dashboard";
import About from './pages/About';
import Analytics from './pages/Analytics';
import Comment from './pages/Comment';
import Product from './pages/Product';
import ProductList from './pages/ProductList';

const Home = () => {
    return (
        
            
                <Router>
            <DASH>
            <Switch>
                    <Route path="/">
                        <All/>
                        </Route>
                    <Route path="/About">
                        <About />
                    </Route>
                    <Route path="/Analytics">
                        <Analytics />
                    </Route>
                    <Route path="/Comment">
                        <Comment />
                    </Route>
                    <Route path="/Product">
                        <Product />
                    </Route>
                    <Route path="/ProductList">
                        <ProductList />
                    </Route>
            </Switch>
            </DASH>
                </Router>
            
        
    );
}
export default Home;