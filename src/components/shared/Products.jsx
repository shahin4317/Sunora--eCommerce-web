import React from 'react';
import PopularProductsCard from './PopularProductsCard';

const Products = async () => {

    const res = await fetch('https://sunora-e-commerce-web.vercel.app/data.json');
    const data = await res.json();
    const products = data.slice(0, 3)
    console.log(products);
    return (

        <div>
            {
                products.map(product => <PopularProductsCard key={product.id} product={product}></PopularProductsCard>)
            }
        </div>


    );
};

export default Products;