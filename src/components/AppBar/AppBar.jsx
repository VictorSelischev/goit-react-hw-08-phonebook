import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigation } from '../Navigation/Navigation';

export const AppBar = () => {
    return (
        <header>
            <Navigation />
            <UserMenu />
        </header>
    );
}