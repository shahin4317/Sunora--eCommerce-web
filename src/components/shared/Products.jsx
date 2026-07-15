import React from 'react';
import PopularProductCard from './PopularProductCard';
import { BiRightArrow } from 'react-icons/bi';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Link from 'next/link';

const Products = async () => {

    const res = await fetch('https://sunora-e-commerce-web.vercel.app/data.json');
    const data = await res.json();
    const products = data.slice(0, 3)
    console.log({ products });
    return (

        <div className='container mx-auto '>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-5xl font-semibold">
                    Popular Products
                </h1>

                <Link href={'./products'}><button className="flex items-center gap-2 text-amber-600 hover:text-amber-700 cursor-pointer text-xl">
                    View All
                    <FaLongArrowAltRight />
                </button></Link>
            </div>
            <div className='<div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center ">'>
                {
                    products.map(product => <PopularProductCard key={product.id} product={product}></PopularProductCard>)
                }

            </div>

        </div>


    );
};

export default Products;