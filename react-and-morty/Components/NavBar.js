import {Link} from "react-router-dom";
import image from '../images/rick-and-morty-logo.png'

import './NavBar.scss';

const NavBar = () => {
    return (
            <div className="menu-wrapper">
                <Link to={"/"} className="logo" >
                    <img src={image} alt="" />
                </Link>

                <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
                <label htmlFor="menu-icon"></label>
                <nav className="nav"> 		
                    <ul className="pt-5">
                        <li><Link to={'/characters'}>Characters</Link></li>
                        <li><Link to={'/locations'}>Locations</Link></li>
                    </ul>
                </nav>
            </div>
    )
}

export default NavBar;