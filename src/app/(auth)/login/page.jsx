'use client';

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { IoMdEyeOff } from 'react-icons/io';

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const onSubmit = async (e) => {
        e.preventDefault()

        const email = e.target.email.value;
        const password = e.target.password.value
        const { data, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: "/",
        });
        if(data){
            alert('Loging success',data.message)

        }
        if(error){
            alert(error.message)
        }
        console.log(data,error);

    }

    return (
        <div className="min-h-screen bg-[#F8F3EA] flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
                <h1 className="text-3xl font-bold text-center text-gray-800">
                    Login Your Account
                </h1>


                <form className="space-y-5" onSubmit={onSubmit}>
                    {/* Email */}
                    <div>
                        <label className="block text-sm font-semibold mb-2">
                            Email Address
                        </label>

                        <input
                            type="email"
                            name='email'
                            placeholder="Enter your email"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <label className="block text-sm font-semibold mb-2">
                            Password
                        </label>

                        <input
                            name='password'
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter your password"
                            className="input input-bordered w-full pr-12"
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-[44px] text-gray-500"
                        >
                            {showPassword ? <FaEye /> : <IoMdEyeOff />}
                        </button>
                    </div>

                    {/* Remember & Forgot */}
                    <div className="flex justify-between items-center text-sm">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="checkbox checkbox-sm" />
                            Remember me
                        </label>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="btn btn-primary w-full rounded-lg"
                    >
                        Login
                    </button>
                </form>

                {/* Register */}
                <p className="text-center mt-6 text-sm">
                    Don't have an account?{' '}
                    <Link
                        href="/register"
                        className="text-primary font-semibold hover:underline"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;