import React from 'react';
import sun from '@/assets/sun.png'
import tip from '@/assets/tip.png'
import water from '@/assets/water.png'
import Image from 'next/image';
const SkinCareSection = () => {
    return (
        <div className='container mx-auto p-2'>
            <div className=' felx text-center  ' >

                <div className='space-y-2 mb-10'>
                    <h1 className='text-4xl font font-semibold'>Summer Care Tips </h1>
                    <h2 className='text-sm '>Stay glowing,Hydrate and Sun Ready All Season</h2>

                </div> 

                <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-center lg:gap-10">
                    <div className="card bg-base-100  shadow-sm w-80">
                        <figure className='p-4'>
                            <Image src={tip} alt='sun' width={100} height={90}></Image>

                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Light SkinCare</h2>
                            <p className='text-left'>Switch to gel-based moisturizers</p>

                        </div>
                    </div>
                    {/* 2nd */}
                    <div className="card bg-base-100  shadow-sm w-80">
                        <figure className='p-4'>
                            <Image src={water} alt='sun' width={100} height={90}></Image>

                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Hydrate Daily</h2>
                            <p className='text-left'>Drink 8 glasses & use haydrtring mist</p>

                        </div>
                    </div>





                    {/* 3rd */}
                    <div className="card bg-base-100  shadow-sm w-80">
                        <figure className='p-4'>
                            <Image src={sun} alt='sun' width={100} height={90}></Image>

                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">SPF Eeryday</h2>
                            <p className='text-left'> Apply SPF 50+ befor stepping out.</p>

                        </div>
                    </div>


                </div>


            </div>
        </div>
    );
};

export default SkinCareSection;