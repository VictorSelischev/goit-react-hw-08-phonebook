import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
    return (
        <nav className={css.navigation}>
            <NavLink className={css.link} to='/'>Home</NavLink>
            <NavLink className={css.link} to="/register">Register</NavLink>
            <NavLink className={css.link} to="/login">Login</NavLink>
            <NavLink className={css.link} to="/contacts">Contacts</NavLink>
        </nav>
    );
}