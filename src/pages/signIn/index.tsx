import { Link } from "react-router-dom";
import Input from "../../components/form/input";

const SignIn = () => {
    return (
        <div className='bg-blue-500 flex items-center justify-center min-h-screen'>
            <div className='bg-white w-[500px] p-8 rounded-lg shadow-md w-96'>
                <h1 className='text-2xl font-bold mb-6 text-center'>
                    Create an Account
                </h1>
                <p className='text-gray-600 mb-6 text-center'>
                    Create a account to continue
                </p>

                <form>
                    <div className='mb-4'>
                        <Input label='Email' />
                    </div>

                    <div className='mb-4'>
                        <Input label='Username' />
                    </div>

                    <div className='mb-6'>
                        <Input
                            label='Password'
                            type='password'
                        />
                    </div>

                    <div className='mb-6'>
                        <label className='flex items-center'>
                            <input
                                type='checkbox'
                                className='form-checkbox text-blue-500'
                                required
                            />
                            <span className='ml-2 text-gray-700'>
                                I accept terms and conditions
                            </span>
                        </label>
                    </div>

                    <button
                        type='submit'
                        className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                    >
                        Sign Up
                    </button>
                </form>

                <p className='mt-4 text-center text-gray-600'>
                    Already have an account?
                    <Link
                        to='/login'
                        className='text-blue-500 ml-2'
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;
