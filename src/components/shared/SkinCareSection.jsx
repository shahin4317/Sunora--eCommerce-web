import React from 'react';
import sun from '@/assets/sun.png'
import tip from '@/assets/tip.png'
import water from '@/assets/water.png'
import Image from 'next/image';
const SkinCareSection = () => {
    return (
        <div className='container mx-auto p-2'>
            <div className=' flex flex-col lg:flex-row justify-between items-center gap-8 ' >

                <div className='space-y-2'>
                    <h1 className='text-4xl font font-semibold'>Summer Care Tips </h1>
                    <h2 className='text-sm '>Stay glowing,Hydrate and Sun Ready All Season</h2>

                </div> 

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <div className="card bg-base-100  shadow-sm w-60">
                        <figure className='p-4'>
                            <Image src={tip} alt='sun' width={70} height={70}></Image>

                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Light SkinCare</h2>
                            <p>Switch to gel-based moisturizers</p>

                        </div>
                    </div>
                    {/* 2nd */}
                    <div className="card bg-base-100  shadow-sm w-60">
                        <figure className='p-4'>
                            <Image src={water} alt='sun' width={70} height={70}></Image>

                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Hydrate Daily</h2>
                            <p>Drink 8 glasses & use haydrtring mist</p>

                        </div>
                    </div>





                    {/* 3rd */}
                    <div className="card bg-base-100  shadow-sm w-60">
                        <figure className='p-4'>
                            <Image src={sun} alt='sun' width={70} height={70}></Image>

                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">SPF Eeryday</h2>
                            <p> Apply SPF 50+ befor stepping out.</p>

                        </div>
                    </div>


                </div>


            </div>
        </div>
    );
};

export default SkinCareSection;