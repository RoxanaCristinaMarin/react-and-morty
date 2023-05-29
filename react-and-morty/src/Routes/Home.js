import { Link } from "react-router-dom";

import "./Home.scss";
import Buttons from '../Components/Buttons';
import ParticleBackground from "../Components/ParticleBackground";

const Home = () => {
    return (
        <div className="home-wrapper">
            <Link className='locations' to={`locations`}>
                <Buttons text={'Locations'} />
            </Link>
            <Link className='characters' to={`characters`}>
                <Buttons text={'Characters'} />
            </Link>
            <div className="home">
            </div>
            <ParticleBackground />
        </div>
    );
};

export default Home;