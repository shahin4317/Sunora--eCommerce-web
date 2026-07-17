"use client"
import UpdateUser from '@/components/shared/UpdateUser';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';

const MyProfilePage = () => {
    const userData = authClient.useSession()
    const users = userData.data?.user

    console.log(users);

    return (
        <div className='container mx-auto p-10 bg-white w-96 shadow-2xl rounded-md mt-10 mb-10 sapce-y-3 '>
            
                <div className='flex items-center justify-center'>
                    <Image src={users?.image} alt={users?.name} width={50} height={50} referrerPolicy='no-referrer' className='rounded-full text-center h-30 w-30'></Image>
                </div>
                <div className='text-center'>
                    <h1 className='text-xl font-bold'>{users?.name}</h1>
                    <h1 className='font-semibold'>{users?.email}</h1>
                </div>
                <div>
                    <UpdateUser ></UpdateUser>

                </div>
                
            

        </div>
    );
};

export default MyProfilePage;