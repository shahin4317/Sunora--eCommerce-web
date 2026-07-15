import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const ProductDetails = async ({ params }) => {
    const { id } = await params
    console.log(id);
    const res = await fetch('https://sunora-e-commerce-web.vercel.app/data.json');
    const datas = await res.json()
    const data = datas.find(p => p.id == id)
    console.log(data);

    return (
        <div className=' container mx-auto flex justify-center pt-10 mb-10 w-full p-4'>
            <div className="card bg-base-100 shadow-2xl flex justify-center">
                <figure className="p-5 flex items-center justify-center w-full">
                    <Image
                        src={data?.image}
                        alt={data?.name}
                        width={200}
                        height={100}
                        className="object-contain "
                    />
                </figure>
                <div className="p-6 flex-1 flex flex-col space-y-3">
                    <h2 className="card-title text-2xl font-semibold line-clamp-2 min-h-14">
                        {data?.name}
                    </h2>
                    <h2 className='font-semibold'> {data.description}</h2>
                    <h2 className='text-xl font-semibold'>Brand: {data.brand}</h2>

                    <div className="flex items-center gap-1 text-yellow-500">
                        <FaStar />
                        <span>{data?.rating} <span className='text-red-500 ml-10 text-xs'>(Stock {data.stock})</span></span>
                    </div>

                    <h2 className="text-xl font-semibold text-[#E86A33]">
                        Price: ${data?.price}
                    </h2>
                    <Link href={'/products'}> <button className='btn items-center w-full btn-neutral btn-outline mt-auto'>Go Back</button></Link>

                </div>

            </div>
        </div>
    );
};

export default ProductDetails;