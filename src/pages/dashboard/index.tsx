import { Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold underline'>dashboard</h1>
            <Outlet />
        </div>
    );
};

export default Dashboard;
