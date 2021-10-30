import './nav.css';
import { NavLink } from 'react-router-dom';

function Nav() { 
    return (
        <nav className="navbar fixed-top navbar-expand-lg">
            <a className="navbar-brand" href="#">Bar M8</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <div className="nav-link"><NavLink to='/business'>For Business</NavLink></div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link"><NavLink to='/about'>About</NavLink></div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link"><NavLink to='/faq'>FAQ</NavLink></div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link"><NavLink to='/partners'>Partners</NavLink></div>
                    </li>
                </ul>
            </div>
        </nav>    
    )
}

export default Nav;