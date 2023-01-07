import { useDispatch } from "react-redux";

const Login = () => {

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch();
        form.reset();
    };

    return (
        <div>
            <form autoComplete="off" onSubmit={handleSubmit} >
                <label>
                    <input type="email" name="email" />
                </label>
                <label>
                    <input type="password" name="password" />
                </label>
                <button type="submit" ></button>
            </form>
        </div>
    );
}

export default Login;