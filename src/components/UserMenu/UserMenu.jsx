import { useDispatch } from 'react-redux';

import { useAuth } from 'hooks';
import css from './UserMenu.module.css';
import { logOut } from 'redux/auth/authOperation';

export const UserMenu = () => {
  const { useremail } = useAuth();
  const dispatch = useDispatch();
  return (
    <div className={css.usermenu}>
      <p className={css.email}>{useremail}</p>
      <button className={css.button} onClick={() => dispatch(logOut())}>Logout</button>
    </div>
  );
};
