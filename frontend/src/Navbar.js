import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Navbar() {

    return(
    <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
        <div>
            <FontAwesomeIcon icon={faPersonRunning} className="nav-item pe-2" color="white" size="lg"/>
            <a className="navbar-brand" href="#">Teleportal</a>
        </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">HOME</Link>
                </li>
                <li className="nav-item">
                    <Link to="/payments" className="nav-link">PAYMENTS</Link>
                </li>
                <li>
                    <Link to="/login" className="nav-link">LOGIN</Link>
                    {/* test */}
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar