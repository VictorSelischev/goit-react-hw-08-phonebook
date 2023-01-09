import { useAuth } from "hooks";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({redirectTo = '/', component: Component }) => {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? <Navigate to={ redirectTo} /> : Component ;
}