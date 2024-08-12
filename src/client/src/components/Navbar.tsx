// Import modules
import { NavLink } from 'react-router-dom';
// Import Style
import '../styles/navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-left'>Balinca Gabriel</div>
                <div className='navbar-right'>
                    <ul>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/projects'>Projects</NavLink>
                        <NavLink to='/'>Login</NavLink>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
