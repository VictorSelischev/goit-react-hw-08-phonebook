import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
    return (
        <nav>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
        </nav>
    );
}