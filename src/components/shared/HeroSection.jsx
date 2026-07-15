"use client";

import { useSpring, animated } from "@react-spring/web";
import Image from 'next/image';
import React from 'react';
import product from '@/assets/product.png'
import { ArrowBigLeft, ArrowLeft, ArrowRight } from 'lucide-react';
const HeroSection = () => {
    const styles = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
    });
    return (
        <div className='container mx-auto text-center '>
            <div className='container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 p-3'>
                <div className='text-left space-y-3 '>
                    <div className="inline-flex items-center gap-2 bg-[#E86A33] text-white px-4 py-2 rounded-full">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
                        </span>

                        <span className="text-sm font-medium">
                            HOT OFFER
                        </span>
                    </div>
                    <animated.h1 style={styles} >
                        SUMMER SALE
                    </animated.h1>
                    <h2 className='text-6xl font font-semibold '>50% OFF</h2>
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