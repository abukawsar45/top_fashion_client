import React, { useEffect, useState } from 'react';
import ProductsCart from '../ProductsCart/ProductsCart';
import ProductsLoading from '../ProductsLoading/ProductsLoading';
import useFetch from '../../hooks/useFetch';
import { addToBookingDB, getBookingCart } from '../../utilities/fakeDB/fakeDb';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Products = () => {
  const { data: productsData, loading } = useFetch('/allProducts');
  const [sliceValue, setSliceValue] = useState(8);
  let [storeCart, setStoreCart] = useState(getBookingCart() || {});

  
  useEffect(() => {
    
  }, [storeCart]);

  
  const handleAddToCart = (id) => {
    addToBookingDB(id);

      const exists = Object.keys(storeCart).includes(id);
      console.log({exists})
      if (exists) {
        return toast.error('Already added this item!');
    } 
      else
      {
        toast.success('Product added to cart!');
    }
    const addedProduct = getBookingCart();
    setStoreCart(addedProduct);

  };
  
  return (
    <div>
      {/* Same as */}
      <ToastContainer />
      {loading ? (
        <ProductsLoading />
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-8'>
          {productsData?.slice(0, sliceValue).map((product) => (
            <ProductsCart
              storeCart={storeCart}
              handleAddToCart={handleAddToCart}
              key={product._id}
              product={product}
            />
          ))}
        </div>
      )}
      {!loading && productsData.length > sliceValue && (
        <button
          type='button'
          onClick={() => setSliceValue((prev) => prev + 8)}
          className='mt-10 mx-auto px-3 py-2 rounded-md font-semibold  flex justify-center items-center border border-blue-500 bg-blue-400 hover:bg-blue-500 hover:text-white'
        >
          View More
        </button>
      )}
    </div>
  );
};

export default Products;
