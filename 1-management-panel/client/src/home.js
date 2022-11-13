import Dash from './Dash-board'
import "./Home.css";

const Home = () => {
    return (
        <div>
            {/* add Dash-Board */}
            <div className='Dash'>
                <Dash />
            </div>
        </div>
    );
}
export default Home;