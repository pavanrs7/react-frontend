import { Link } from "react-router-dom";

import "./navbar.css";
import Logo from "../assets/Logo.png";  
function Navbar() {
    return(
        <nav className="navbar">
            <div className="nav-left">
                <Link to = "/">MridVatsa</Link>
            </div>
            <div class="nav-center">
                <Link to = "/">
                    <img src={Logo} alt="Logo" className="logo" />
                </Link>
                </div>
            <div className="nav-right">
                
                <Link to ="/">Home</Link>
                <Link to ="/About">About</Link>
                <Link to="/learn"> Learn</Link>
                
                <Link to ="/contact">Contact</Link> 
            </div>                                                                
        </nav>
    ); 
       
}
export default Navbar;
