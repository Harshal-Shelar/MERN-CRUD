import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='mainHeader'>
                <NavLink className="navLinks" to="all" exact>All Users</NavLink>
                <NavLink className="navLinks" to="add" exact>Add User</NavLink>
        </div>
    )
}

export default NavBar;