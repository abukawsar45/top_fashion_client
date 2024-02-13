import React, { useEffect, useState } from 'react';
import ProductsCart from './ProductsCart';

const Products = () => {
  const [productsData, setProductsData] = useState([])

  useEffect(() => {
    fetch('https://top-fashion-server.vercel.app/allProducts')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProductsData(data);
      });
  },[])

  return (
    <div>
      data
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-8'>
        {productsData.map((product) => (
          <ProductsCart key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;