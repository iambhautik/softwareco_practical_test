import React from "react";
import { Link } from "react-router-dom";
import CheckBox from "../../components/form/CheckBox";
import Input from "../../components/form/input";

const Login = () => {
    return (
        <React.Fragment>
            <div className='bg-blue-500 flex items-center justify-center min-h-screen'>
                <div className='bg-white w-[500px] p-8 rounded-lg shadow-md w-96'>
                    <h2 className='text-2xl font-bold mb-6 text-center'>
                        Login to Account
                    </h2>
                    <p className='text-gray-600 mb-6 text-center'>
                        Please enter your email and password to continue
                    </p>

                    <form>
                        <div className='mb-4'>
                            <Input label='Email address:' />
                        </div>

                        <div className='mb-4 relative'>
                            <Input
                                label='Password'
                                type='password'
                            />
                            <a
                                href='#'
                                className='text-blue-500 text-sm absolute right-0 top-0'
                            >
                                Forget Password?
                            </a>
                        </div>

                        <div className='mb-6'>
                            <CheckBox>Remember Password</CheckBox>
                        </div>

                        <button
                            type='submit'
                            className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300'
                        >
                            Sign In
                        </button>
                    </form>

                    <p className='text-center mt-6 text-gray-600'>
                        Don't have an account?
                        <Link
                            to='/sign-in'
                            className='text-blue-500 ml-2'
                        >
                            Create Account
                        </Link>
                    </p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Login;
