import { useDispatch } from "react-redux";
import { register } from "redux/auth/authOperation";

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
    <form autoComplete="off" onSubmit={handleSubmit} >
      <label>
        <input type="text" name="name" />
      </label>
      <label>
        <input type="email" name="email" />
      </label>
      <label>
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
