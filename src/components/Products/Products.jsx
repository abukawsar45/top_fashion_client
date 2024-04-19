import React, { useEffect, useState } from 'react';
import ProductsCart from '../ProductsCart/ProductsCart';
import ProductsLoading from '../ProductsLoading/ProductsLoading';
import useFetch from '../../hooks/useFetch';

const Products = () => {
  const { data: productsData, loading } = useFetch('/allProducts');

  return (
    <div>
      {loading ? (
        <ProductsLoading />
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-8'>
          {productsData.map((product) => (
            <ProductsCart key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
