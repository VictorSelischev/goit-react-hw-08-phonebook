import css from './UserMenu.module.css';

export const UserMenu = () => {
  return (
    <div className={css.usermenu}>
      <p className={css.email}>mango@mail.com</p>
      <button className={css.button}>Logout</button>
    </div>
  );
};
