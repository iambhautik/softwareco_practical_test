import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout";
import Dashboard from "../pages/dashboard";
import Estimation from "../pages/estimation";
import Login from "../pages/login";
import Projects from "../pages/projects";
import SignIn from "../pages/signIn";

export const AppRoutes = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/sign-in",
        element: <SignIn />,
    },
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/projects",
                element: <Projects />,
            },
            {
                path: "/estimate",
                element: <Estimation />,
            },
        ],
    },
]);
