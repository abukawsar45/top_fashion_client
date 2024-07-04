import React, { useContext, useEffect, useState } from 'react';
import ProductsCart from '../ProductsCart/ProductsCart';
import ProductsLoading from '../ProductsLoading/ProductsLoading';
import useFetch from '../../hooks/useFetch';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MyContext } from '../../providers/MyProvider';
import { useLocation, useParams } from 'react-router-dom';

const SearchData = () => {
  const { productName } = useParams();

   const location = useLocation();
   const { data: productsData, loading } = location.state; 
  //  console.log(dataaa)
  const {
    userData: { addToBookingDB, getBookingCart },
  } = useContext(MyContext);
  // const { data: productsData, loading } = useFetch('/allProducts');

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
    <div className='mb-4 md:mb-8 lg:mb-16' >
      {/* Same as */}
      <ToastContainer />
      <div>
        <h3 className='text-center '>Search results for {productName}</h3>
      </div>
      {loading ? (
        <ProductsLoading />
      ) : productsData.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-8'>
          {productsData?.slice(0, sliceValue).map((product) => (
            <ProductsCart
              storeCart={storeCart}
              productName={productName}
              handleAddToCart={handleAddToCart}
              key={product._id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div className='flex justify-center my-4 md:my-8 lg:my-16'>
          <img
            src='https://media.istockphoto.com/id/1207750534/photo/404-error-internet-page-not-found-hand-with-magnifier-concept-picture.jpg?b=1&s=612x612&w=0&k=20&c=LCa3sH4YETq54JMXnrVjl2iCQQNBj-DXrorIhu71NBI='
            alt='photos'
          />
        </div>
      )}
      {!loading && productsData.length > sliceValue && (
        <button
          type='button'
          onClick={() => setSliceValue((prev) => prev + 12)}
          className='mt-10 mx-auto px-3 py-2 rounded-md font-semibold  flex justify-center items-center border border-gray-200 text-white hover:text-gray-700 bg-blue-400 hover:bg-blue-500 '
        >
          View More
        </button>
      )}
    </div>
  );
};

export default SearchData;

