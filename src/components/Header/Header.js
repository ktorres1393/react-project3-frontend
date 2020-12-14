import { Link } from 'react-router-dom'
import './Header.css'


const Header = (props) => (
  
        <header className="Header">
            <Link to="/">
            <img src='/images/finallogo.png' alt='logo'/>
            </Link>
            <nav>
                <ul className="NavLinks">
                    {
                        props.user ?
                        <>
                            <li><Link to="" onClick={props.handleLogout}>Logout</Link></li>
                            <li><Link to="/dashboard">Create Task List</Link></li>
                        </>
                        :
                        <>
                            <li><Link to="/signup">Signup</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/dashboard">Create Task List</Link></li>
                        </>

                    }
                    
                    
                </ul>
            </nav>
        </header>
    
)

export default Header;