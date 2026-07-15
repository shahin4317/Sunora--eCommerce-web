import PopularProductCard from '@/components/shared/PopularProductCard';
import React from 'react';

const ProductsPage = async() => {
    const res = await fetch('https://sunora-e-commerce-web.vercel.app/data.json')
    const datas = await res.json()
    return (
        <div className=' containe mx-auto grid grid-cols-4 p-10 gap-10'>
            {
                datas.map(product=> <PopularProductCard key={product.id} product={product} ></PopularProductCard>)
            }
            
        </div>
    );
};

export default ProductsPage;