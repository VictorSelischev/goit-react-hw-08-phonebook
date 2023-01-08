import { useAuth } from 'hooks';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const { useremail } = useAuth();

  return (
    <div className={css.usermenu}>
      <p className={css.email}>{useremail}</p>
      <button className={css.button}>Logout</button>
    </div>
  );
};
