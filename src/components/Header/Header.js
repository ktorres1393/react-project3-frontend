import './Header.css'

const Header = (props) => (
  
        <header className="Header">
            <h1>My Project</h1>
            <nav>
                <ul className="NavLinks">
                    <li>Logout</li>
                    <li>Dashboard</li>
                    <li>Signup</li>
                    <li>Login</li>
                </ul>
            </nav>
        </header>
    
)

export default Header;