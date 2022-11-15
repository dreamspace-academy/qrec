import Dash from './Dash-board'
import "./Home.css";
import Staff from './Staff';

const Home = () => {
    return (
        <div className='row-3'>
            {/* add Dash-Board */}
            <div className='Dash'>
                <span className='fix-dash'><Dash/></span>
                {/* add your page */}
            </div>
        </div>
    );
}
export default Home;