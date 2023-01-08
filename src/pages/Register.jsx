import { useDispatch } from "react-redux";
import { register } from "redux/auth/authOperation";

const styles = {
  registerform: {
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
    <form  style={styles.registerform} autoComplete="off" onSubmit={handleSubmit} >
      <label style={styles.label}>Name
        <input style={styles.input} type="text" name="name" />
      </label>
      <label style={styles.label}>Email
        <input style={styles.input} type="email" name="email" />
      </label>
      <label style={styles.label}>Password
        <input style={styles.input} type="password" name="password" />
      </label>
      <button style={styles.button} type="submit">Register</button>
    </form>
  );
};

export default Register;
