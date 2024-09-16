import React from "react";

const Header = () => {
    return (
        <React.Fragment>
            <header className='bg-white p-4 flex justify-between items-center'>
                <div className='flex items-center'>
                    <button className='mr-4'>
                        <i className='ri-menu-line text-2xl'></i>
                    </button>
                    <div className='relative'>
                        <i className='ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'></i>
                        <input
                            type='text'
                            placeholder='Search'
                            className='pl-10 pr-4 py-2 bg-gray-100 rounded-full w-64'
                        />
                    </div>
                </div>
                <div className='flex items-center'>
                    <button className='relative mr-4'>
                        <i className='ri-notification-3-line text-2xl'></i>
                        <span className='absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center'>
                            3
                        </span>
                    </button>
                    <button className='flex items-center mr-4'>
                        <img
                            src='https://via.placeholder.com/24'
                            alt='English flag'
                            className='w-6 h-6 rounded-full mr-2'
                        />
                        English
                        <i className='ri-arrow-down-s-line ml-1'></i>
                    </button>
                    <button className='flex items-center'>
                        <img
                            src='https://via.placeholder.com/32'
                            alt='User avatar'
                            className='w-8 h-8 rounded-full mr-2'
                        />
                        Harley
                        <span className='text-gray-500 ml-1'>Admin</span>
                    </button>
                </div>
            </header>
        </React.Fragment>
    );
};

export default Header;
