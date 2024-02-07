import React, { useEffect, useState } from 'react';

const Products = () => {
  const [productsData, setProductsData] = useState([])

  useEffect(() => {
    fetch('/productsData.json').then(res => res.json()).then(data => {
      console.log(data)
      setProductsData(data)
    })
  },[])

  return (
    <div>
      data
      <div className='grid grid-cols-12' >
        {
          productsData.map(product=><div key={product.id} > <img src={product.img} alt="" />  </div>)
        }
      </div>
    </div>
  );
};

export default Products;