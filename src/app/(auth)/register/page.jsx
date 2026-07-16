'use client';

import { useRouter } from 'next/navigation';
import { authClient } from '../../../lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaEye, FaGoogle } from 'react-icons/fa';
import { IoMdEyeOff } from 'react-icons/io';
import { FcGoogle } from 'react-icons/fc';
const RegisterPage = () => {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const image = e.target.image.value
        const password = e.target.password.value

        const { data, error } = await authClient.signUp.email({
            name,
            email,
            password,
            image,
        });
        if(!error){
            router.push('/')
        }
    }


    return (

        <div className="min-h-screen bg-[#F8F3EA] flex items-center justify-center px-4 mt-2">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
                <h1 className="text-3xl font-bold text-center text-gray-800">
                    Register Your Account
                </h1>


                <form className="space-y-5 pt-4" onSubmit={onSubmit}>
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-semibold mb-2">
                            Name
                        </label>

                        <input
                            type="name"
                            name='name'
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
                            name='image'
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

                            type={showPassword ? 'text' : 'password'}
                            name='password'
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
                <h1 className='text-center mt-3 font-semibold'>OR</h1>
                <button className='btn btn-primary w-full rounded-lg mt-4' > <FcGoogle/> Sing In With Google</button>



            </div>
        </div>

    );
};

export default RegisterPage;