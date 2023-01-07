import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigation } from '../Navigation/Navigation';
import css from './AppBar.module.css';

export const AppBar = () => {
    return (
        <header>
            <Navigation />
            <UserMenu />
        </header>
    );
}