import Register from "./pages/register"
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import SignIn from "./pages/SignIn"

function ProtectedRoutes({ redirectTo }) {
    const isAuthenticated = true;

    return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
}

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Register />} />

            <Route element={<ProtectedRoutes redirectTo="/" />}>
                <Route path="/SignIn" element={< SignIn />} />
            </Route>
        </Routes>
    )
}

export default MainRoutes;