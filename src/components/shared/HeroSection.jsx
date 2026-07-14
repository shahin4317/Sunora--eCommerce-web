import Image from 'next/image';
import React from 'react';
import product from '@/assets/product.png'
import { ArrowBigLeft, ArrowLeft, ArrowRight } from 'lucide-react';
const HeroSection = () => {
    return (
        <div className='container mx-auto text-center '>
            <div className='flex items-center text-center justify-center gap-15'>
                <div className='text-left space-y-3'>

                    <h2 className='bg-amber-600 text-sm p-2 w-30 rounded-full font-semibold '>HOT OFFER</h2>
                    <h1 className='text-5xl '>SUMMER SALE</h1>
                    <h2 className='text-4xl font font-semibold '>50% OFF</h2>
                    <div>
                        <span className='text-sm '>Sunglass . Outfit . SkinCare</span>
                    </div>
                    <button className='btn bg-black  text-white'>Shop Now <ArrowRight></ArrowRight></button>

                </div>
                <div>
                    <Image src={product} alt='product' width={500} height={400}></Image>

                </div>

            </div>

        </div>
    );
};

export default HeroSection;