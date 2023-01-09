import { useAuth } from "hooks";
import { Navigate } from "react-router";

export const PrivateRoute = ({redirectTo='/', component: Component }) => {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? <Navigate/> : Component ;
}