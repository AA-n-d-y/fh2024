import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons';

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
                    <a className="nav-link" href="#" aria-current="page">HOME</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">PAYMENTS</a>
                </li>
                <li>
                    <a href="#" className="nav-link">LOGIN</a>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar