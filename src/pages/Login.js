import React, { useContext, useState } from 'react'
import loginIcons from '../assest/image.png'
import { FaEye, FaEyeSlash, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import Context from '../context';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false); // New loading state
    const navigate = useNavigate();
    const { fetchUserDetails } = useContext(Context);

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true when submitting

        try {
            const dataResponse = await fetch(SummaryApi.signIn.url, {
                method: SummaryApi.signIn.method,
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const dataApi = await dataResponse.json();

            if (dataApi.success) {
                toast.success(dataApi.message);
                fetchUserDetails();
                navigate('/'); // Navigate after successful login
            } else {
                toast.error(dataApi.message || "Login failed");
            }
        } catch (error) {
            toast.error("An error occurred during login. Please try again.");
            console.error("Login Error:", error);
        } finally {
            setLoading(false); // Always set loading to false at the end
        }
    }

    return (
        <section id='login'>
            <div className='mx-auto container p-4'>
                <div className='bg-white p-5 rounded-xl w-full max-w-sm mx-auto'>
                    <div className='w-20 h-20 mx-auto'>
                        <img src={loginIcons} alt='login icons' />
                    </div>

                    <form className='pt-6 flex flex-col gap-4' onSubmit={handleSubmit}>
                        <div className='grid'>
                            <div className='bg-slate-200 rounded-xl p-3'>
                                <input 
                                    type='email' 
                                    placeholder='Enter email' 
                                    name='email'
                                    value={data.email}
                                    onChange={handleOnChange}
                                    className='w-full h-full outline-none bg-transparent'
                                    required // Add validation for email field
                                />
                            </div>
                        </div>

                        <div>
                            <div className='bg-slate-200 p-3 rounded-xl flex'>
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    placeholder='Enter password'
                                    value={data.password}
                                    name='password' 
                                    onChange={handleOnChange}
                                    className='w-full h-full outline-none bg-transparent'
                                    required // Add validation for password field
                                />
                                <div className='cursor-pointer text-xl' onClick={() => setShowPassword(prev => !prev)}>
                                    <span>
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>
                            </div>
                            <Link to={'/forgot-password'} className='block w-fit ml-auto py-3 hover:underline hover:text-red-600'>
                                Forgot password?
                            </Link>
                        </div>

                        <button 
                            className='bg-darkbrown hover:bg-darkbrown text-white text-lg px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-2'
                            type="submit"
                            disabled={loading} // Disable button while loading
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>
                    </form>

                    <div className="mt-4 space-y-2">
                        <button
                            className="w-full bg-white border gap-6 border-gray-300 text-black py-2 rounded-lg shadow-lg flex items-center justify-center transform transition-transform duration-300 hover:scale-105"
                        >
                            <FcGoogle className='text-3xl' />
                            Continue with Google
                        </button>
                        <button
                            className="w-full bg-black text-white py-2 gap-6 rounded-lg shadow-lg flex items-center justify-center transform transition-transform duration-300 hover:scale-105"
                        >
                            <FaApple className='text-3xl' />
                            Continue with Apple
                        </button>
                    </div>

                    <p className='my-5'>Don't have an account? <Link to={"/sign-up"} className='text-red-600 hover:text-red-700 hover:underline'>Sign up</Link></p>
                </div>
            </div>
        </section>
    );
}

export default Login;
