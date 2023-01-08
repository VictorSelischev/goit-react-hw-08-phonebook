import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperation';

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: 240,
    marginTop: 60,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 16,
    marginBottom: 16,
  },
  input: {
    marginTop: 4,
  },
  button: {
    width: 100,
    padding: '4px 8px',
  },
};

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(login({ email, password }));
    form.reset();
  };

  return (
    <form style={styles.form} autoComplete="off" onSubmit={handleSubmit}>
      <label style={styles.label}>
        Email
        <input style={styles.input} type="email" name="email" />
      </label>
      <label style={styles.label}>
        Password
        <input style={styles.input} type="password" name="password" />
      </label>
      <button style={styles.button} type="submit">
        Login
      </button>
    </form>
  );
};

export default Login;
