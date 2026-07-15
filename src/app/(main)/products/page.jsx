import PopularProductCard from '@/components/shared/PopularProductCard';
import React from 'react';

const ProductsPage = async() => {
    const res = await fetch('https://sunora-e-commerce-web.vercel.app/data.json')
    const datas = await res.json()
    return (
        <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {
                datas.map(product=> <PopularProductCard key={product.id} product={product} ></PopularProductCard>)
            }
            
        </div>
    );
};

export default ProductsPage;