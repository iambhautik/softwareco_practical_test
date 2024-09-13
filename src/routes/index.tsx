import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashboard/index";
import Projects from "../pages/projects/index";

export const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
        children: [
            {
                path: "/projects",
                element: <Projects />,
            },
        ],
    },
]);
