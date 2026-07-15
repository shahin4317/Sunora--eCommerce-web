'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { IoMdEyeOff } from 'react-icons/io';
const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (

        <div className="min-h-screen bg-[#F8F3EA] flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
                <h1 className="text-3xl font-bold text-center text-gray-800">
                    Register Your Account
                </h1>


                <form className="space-y-5 pt-4">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-semibold mb-2">
                            Name
                        </label>

                        <input
                            type="name"
                            placeholder="Enter your Name"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Photo Url */}
                    <div>
                        <label className="block text-sm font-semibold mb-2">
                            Photo
                        </label>

                        <input
                            type="photo"
                            placeholder="Your Name Photo"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-semibold mb-2">
                            Email Address
                        </label>

                        <input
                            type="email"
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



                    {/* Login Button */}
                    <button
                        type="submit"
                        className="btn btn-primary w-full rounded-lg"
                    >
                        Login
                    </button>
                </form>



            </div>
        </div>

    );
};

export default RegisterPage;