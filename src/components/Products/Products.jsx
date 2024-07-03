import React, { useContext, useEffect, useState } from 'react';
import ProductsCart from '../ProductsCart/ProductsCart';
import ProductsLoading from '../ProductsLoading/ProductsLoading';
import useFetch from '../../hooks/useFetch';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MyContext } from '../../providers/MyProvider';

const Products = () => {
  const {
    userData: { addToBookingDB, getBookingCart },
  } = useContext(MyContext);
  const { data: productsData, loading } = useFetch('/allProducts');

  const [sliceValue, setSliceValue] = useState(12);
  let [storeCart, setStoreCart] = useState(getBookingCart() || {});


  const handleAddToCart = (id, setExistItem) => {
    addToBookingDB(id);

    const exists = Object.keys(storeCart).includes(id);
    // console.log({ exists });
   if (exists) {
     return toast.error('Already added this item!');
   } else {
     setExistItem(true);
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
          onClick={() => setSliceValue((prev) => prev + 12)}
          className='mt-10 mx-auto px-3 py-2 rounded-md font-semibold  flex justify-center items-center border border-gray-200 text-white hover:text-gray-700 bg-emerald-400 hover:bg-emerald-500 '
        >
          View More
        </button>
      )}
    </div>
  );
};

export default Products;
