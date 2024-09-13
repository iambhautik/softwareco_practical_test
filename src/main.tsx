import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./assets/css/index.css";
import { AppRoutes } from "./routes/index.tsx";
import { store } from "./store/index.ts";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={AppRoutes} />
        </Provider>
    </StrictMode>,
);
