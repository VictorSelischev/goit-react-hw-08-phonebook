import { useDispatch } from "react-redux";

const Register = () => {

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch();
        const form = e.currentTarget;
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
