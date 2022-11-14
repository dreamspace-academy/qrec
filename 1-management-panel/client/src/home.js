import Dash from './Dash-board'
import "./Home.css";

const Home = () => {
    return (
        <div>
            {/* add Dash-Board */}
            <div className='Dash'>
                <span className='fix-dash'><Dash /></span> 
                
                {/* add your page */}
            </div>
        </div>
    );
}
export default Home;