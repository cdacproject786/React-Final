import { useLocation, Navigate,Outlet } from "react-router-dom";
import App from "../App";
import useAuth from "../hooks/useAuth";

const RequiredAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        auth?.user
            ? <App/>
            : <Navigate to="/" state={{from: location }} replace/>
    )
}