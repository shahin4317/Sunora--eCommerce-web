import Image from 'next/image';
import React from 'react';
import nivea from '@/assets/nivea.png'
import Ponds from '@/assets/Ponds.png'
import garnier from '@/assets/garnier.png'
import vaseline from '@/assets/vaseline.png'

const TopBrands = () => {
    return (
        <div className='container mx-auto text-center pt-10'>
            <div className=' text-center'>
                <div className='space-y-3'>
                    <h1 className='text-5xl'>Top Brands</h1>
                    <span className='text-sm'>Trusted brands You can really on</span>
                </div>
                <div className='flex justify-center gap-8 mt-5'>
                    <div className='bg-[#E86A33] p-2 rounded-md shadow-2xl'>
                        <Image src={nivea} alt='nevia' width={100} height={100}></Image>
                    </div>
                    <div className='bg-[#E86A33] p-2 rounded-md shadow-2xl'>
                        <Image src={garnier} alt='garnier' width={100} height={100}></Image>
                    </div>
                    <div className='bg-[#E86A33] p-2 rounded-md shadow-2xl'>
                        <Image src={Ponds} alt='Ponds' width={100} height={100}></Image>
                    </div>
                    <div className='bg-[#E86A33] p-2 rounded-md shadow-2xl'>
                        <Image src={vaseline} alt='vaseline' width={100} height={100}></Image>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default TopBrands;<div>
<div>
    <h1>Top Brands</h1>
</div></div>