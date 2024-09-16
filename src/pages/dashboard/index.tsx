import React from "react";

const Dashboard = () => {
    return (
        <React.Fragment>
            <h1 className='text-2xl font-bold mb-6'>Dashboard</h1>

            {/* <!-- Stat Cards --> */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6'>
                {/* <!-- Total User --> */}
                <div className='bg-white p-4 rounded-lg shadow'>
                    <div className='flex justify-between items-center mb-2'>
                        <h3 className='text-gray-500'>Total User</h3>
                        <div className='bg-purple-100 p-2 rounded-full'>
                            <i className='ri-user-line text-purple-500'></i>
                        </div>
                    </div>
                    <div className='text-2xl font-bold mb-2'>40,689</div>
                    <div className='text-sm text-green-500'>
                        8.5% Up from yesterday
                    </div>
                </div>

                {/* <!-- Total Order --> */}
                <div className='bg-white p-4 rounded-lg shadow'>
                    <div className='flex justify-between items-center mb-2'>
                        <h3 className='text-gray-500'>Total Order</h3>
                        <div className='bg-yellow-100 p-2 rounded-full'>
                            <i className='ri-shopping-cart-line text-yellow-500'></i>
                        </div>
                    </div>
                    <div className='text-2xl font-bold mb-2'>10293</div>
                    <div className='text-sm text-green-500'>
                        1.3% Up from past week
                    </div>
                </div>

                {/* <!-- Total Sales --> */}
                <div className='bg-white p-4 rounded-lg shadow'>
                    <div className='flex justify-between items-center mb-2'>
                        <h3 className='text-gray-500'>Total Sales</h3>
                        <div className='bg-green-100 p-2 rounded-full'>
                            <i className='ri-line-chart-line text-green-500'></i>
                        </div>
                    </div>
                    <div className='text-2xl font-bold mb-2'>$89,000</div>
                    <div className='text-sm text-red-500'>
                        4.3% Down from yesterday
                    </div>
                </div>

                {/* <!-- Total Pending --> */}
                <div className='bg-white p-4 rounded-lg shadow'>
                    <div className='flex justify-between items-center mb-2'>
                        <h3 className='text-gray-500'>Total Pending</h3>
                        <div className='bg-red-100 p-2 rounded-full'>
                            <i className='ri-time-line text-red-500'></i>
                        </div>
                    </div>
                    <div className='text-2xl font-bold mb-2'>2040</div>
                    <div className='text-sm text-green-500'>
                        1.8% Up from yesterday
                    </div>
                </div>
            </div>

            {/* <!-- Sales Chart --> */}
            <div className='bg-white p-6 rounded-lg shadow mb-6'>
                <div className='flex justify-between items-center mb-4'>
                    <h2 className='text-xl font-bold'>Sales Details</h2>
                    <select className='bg-gray-100 rounded-md px-3 py-1'>
                        <option>October</option>
                    </select>
                </div>
                <div className='h-64 bg-gray-200 flex items-center justify-center'>
                    <p className='text-gray-500'>Chart placeholder</p>
                </div>
            </div>

            {/* <!-- Table --> */}
            <div className='bg-white p-6 rounded-lg shadow'>
                <div className='flex justify-between items-center mb-4'>
                    <h2 className='text-xl font-bold'>Table</h2>
                    <select className='bg-gray-100 rounded-md px-3 py-1'>
                        <option>October</option>
                    </select>
                </div>
                <table className='w-full'>
                    <thead>
                        <tr className='bg-gray-50'>
                            <th className='px-4 py-2 text-left'>
                                Product Name
                            </th>
                            <th className='px-4 py-2 text-left'>Location</th>
                            <th className='px-4 py-2 text-left'>Date - Time</th>
                            <th className='px-4 py-2 text-left'>Piece</th>
                            <th className='px-4 py-2 text-left'>Amount</th>
                            <th className='px-4 py-2 text-left'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='px-4 py-2'>
                                <div className='flex items-center'>
                                    <img
                                        src='https://via.placeholder.com/32'
                                        alt='Apple Watch'
                                        className='w-8 h-8 rounded-full mr-2'
                                    />
                                    Apple Watch
                                </div>
                            </td>
                            <td className='px-4 py-2'>
                                6096 Marjolaine Landing
                            </td>
                            <td className='px-4 py-2'>12.09.2019 - 12:53 PM</td>
                            <td className='px-4 py-2'>423</td>
                            <td className='px-4 py-2'>$34,295</td>
                            <td className='px-4 py-2'>
                                <span className='bg-green-500 text-white px-2 py-1 rounded-full text-xs'>
                                    Delivered
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
};

export default Dashboard;
