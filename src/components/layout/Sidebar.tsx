import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Sidebar = () => {
    return (
        <React.Fragment>
            <aside className='w-64 bg-white h-screen p-4 flex flex-col'>
                <div className='text-2xl flex justify-center text-center font-bold mb-8'>
                    <Link to={"/dashboard"}>
                        <img
                            src={logo}
                            alt='Logo'
                        />
                    </Link>
                </div>
                <nav className='flex-grow'>
                    <NavLink
                        to='/dashboard'
                        className={({ isActive }) =>
                            [
                                isActive
                                    ? "bg-blue-500 text-white"
                                    : "text-gray-700 hover:bg-gray-100",
                                "block py-2 px-4 rounded-md mb-2",
                            ].join(" ")
                        }
                    >
                        <i className='ri-dashboard-line mr-2'></i>Dashboard
                    </NavLink>
                    <NavLink
                        to='/projects'
                        className={({ isActive }) =>
                            [
                                isActive
                                    ? "bg-blue-500 text-white"
                                    : "text-gray-700 hover:bg-gray-100",
                                "block py-2 px-4 rounded-md mb-2",
                            ].join(" ")
                        }
                    >
                        <i className='ri-folder-line mr-2'></i>Projects
                    </NavLink>
                    <NavLink
                        to='/estimate'
                        className={({ isActive }) =>
                            [
                                isActive
                                    ? "bg-blue-500 text-white"
                                    : "text-gray-700 hover:bg-gray-100",
                                "block py-2 px-4 rounded-md mb-2",
                            ].join(" ")
                        }
                    >
                        <i className='ri-pie-chart-line mr-2'></i>Estimates
                    </NavLink>
                    {/* <NavLink
                        to='/dashboard'
                        className={` ${({ isActive }: { isActive: boolean }) => (isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-100")} block py-2 px-4 bg-blue-500 text-white rounded-md mb-2`}
                    >
                        <i className='ri-dashboard-line mr-2'></i>Dashboard
                    </NavLink>
                    <NavLink
                        to='/dashboard'
                        className={` ${({ isActive }: { isActive: boolean }) => (isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-100")} block py-2 px-4 bg-blue-500 text-white rounded-md mb-2`}
                    >
                        <i className='ri-dashboard-line mr-2'></i>Dashboard
                    </NavLink>
                    <Link
                        to='/projects'
                        className='block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md mb-2'
                    >
                        <i className='ri-folder-line mr-2'></i>Projects
                    </Link>
                    <Link
                        to='/estimate'
                        className='block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md mb-2'
                    >
                        <i className='ri-pie-chart-line mr-2'></i>Estimates
                    </Link> */}
                </nav>
                <Link
                    to='Logout'
                    className='block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md'
                >
                    <i className='ri-logout-box-line mr-2'></i>Logout
                </Link>
            </aside>
        </React.Fragment>
    );
};

export default Sidebar;
