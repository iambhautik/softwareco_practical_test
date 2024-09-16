import { Navigate, Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const MainLayout = () => {
    const { pathname } = useLocation();

    if (pathname === "/") {
        return <Navigate to={"/dashboard"} />;
    }

    return (
        <div className='bg-gray-100 flex min-h-screen'>
            <Sidebar />

            <div className='flex-grow'>
                <Header />

                <main className='p-6'>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
