import Input from "../../components/form/input";

const Projects = () => {
    return (
        <div className='bg-gray-100 min-h-screen'>
            <h1 className='text-2xl font-bold mb-6'>Add New Project</h1>

            <div className='bg-white p-6 rounded-lg shadow'>
                <form>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        <div>
                            <label
                                htmlFor='customer'
                                className='block text-sm font-medium text-gray-700 mb-2'
                            >
                                Customer
                            </label>
                            <select
                                id='customer'
                                name='customer'
                                className='w-full p-2 bg-gray-50 border border-gray-300 rounded-md'
                            >
                                <option>Select customer</option>
                            </select>
                        </div>

                        <div>
                            <Input label='Reference Number' />
                        </div>

                        <div>
                            <Input label='Project Name' />
                        </div>

                        <div>
                            <Input label='Project Number' />
                        </div>

                        <div>
                            <Input label='Area Location' />
                        </div>

                        <div>
                            <Input label='Address' />
                        </div>

                        <div>
                            <label
                                htmlFor='due-date'
                                className='block text-sm font-medium text-gray-700 mb-2'
                            >
                                Due Date
                            </label>
                            <div className='relative'>
                                <input
                                    type='text'
                                    id='due-date'
                                    name='due-date'
                                    placeholder='Select Due Date'
                                    className='w-full p-2 bg-gray-50 border border-gray-300 rounded-md'
                                />
                                <i className='ri-calendar-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400'></i>
                            </div>
                        </div>

                        <div>
                            <Input label='Contact' />
                        </div>

                        <div>
                            <label
                                htmlFor='manager'
                                className='block text-sm font-medium text-gray-700 mb-2'
                            >
                                Manager
                            </label>
                            <select
                                id='manager'
                                name='manager'
                                className='w-full p-2 bg-gray-50 border border-gray-300 rounded-md'
                            >
                                <option>Select project manager</option>
                            </select>
                        </div>

                        <div>
                            <label
                                htmlFor='staff'
                                className='block text-sm font-medium text-gray-700 mb-2'
                            >
                                Staff
                            </label>
                            <select
                                id='staff'
                                name='staff'
                                className='w-full p-2 bg-gray-50 border border-gray-300 rounded-md'
                            >
                                <option>Select project staff</option>
                            </select>
                        </div>

                        <div>
                            <label
                                htmlFor='status'
                                className='block text-sm font-medium text-gray-700 mb-2'
                            >
                                Status
                            </label>
                            <select
                                id='status'
                                name='status'
                                className='w-full p-2 bg-gray-50 border border-gray-300 rounded-md'
                            >
                                <option>Select project status</option>
                            </select>
                        </div>

                        <div>
                            <Input
                                label='Email'
                                type='email'
                            />
                        </div>
                    </div>

                    <div className='mt-6 flex justify-start space-x-4'>
                        <button
                            type='submit'
                            className='px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'
                        >
                            Add Now
                        </button>
                        <button
                            type='button'
                            className='px-6 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50'
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Projects;
