import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const PopularProductCard = ({ product }) => {
    console.log(product);
    return (
        <div className=''>
            <div className=''>
                <div className="card w-full h-[420px] bg-base-100 shadow-xl">
                    <figure className="h-44 flex items-center justify-center  w-full">
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={100}
                            height={100}
                            className="object-contain"
                        />
                    </figure>
                    <div className="p-6 flex-1 flex flex-col space-y-3">
                        <h2 className="card-title line-clamp-2 min-h-14">
                            {product.name}
                        </h2>

                        <div className="flex items-center gap-1 text-yellow-500">
                            <FaStar />
                            <span>{product.rating}</span>
                        </div>

                        <h2 className="text-xl font-semibold text-[#E86A33]">
                            Price: ${product.price}
                        </h2>

                        <Link href={`/products/${product.id}`}><button className="btn btn-neutral btn-outline mt-auto">
                            See Details
                        </button></Link>
                    </div>
                    
                </div>  
            </div>
        </div>
    );
};

export default PopularProductCard;