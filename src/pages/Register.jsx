import { useDispatch } from "react-redux";
import { register } from "redux/auth/authOperation";

const styles = {
  registerform: {
    display: 'flex',
    width: 320,
},
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 16,
  }
  }

const Register = () => {

    const dispatch = useDispatch();

    const handleSubmit = e => {
      e.preventDefault();
      const form = e.currentTarget;
      const name = form.elements.name.value;
      const email = form.elements.email.value;
      const password = form.elements.password.value;
        dispatch(register({name, email, password}));
        form.reset();
    };

  return (
    <form  className={styles.registerform} autoComplete="off" onSubmit={handleSubmit} >
      <label className={styles.label}>Name
        <input type="text" name="name" />
      </label>
      <label className={styles.label}>Email
        <input type="email" name="email" />
      </label>
      <label className={styles.label}>Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
