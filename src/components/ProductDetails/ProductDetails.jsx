import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Button from '../Button/Button';
import Div from '../Div/Div';
import { MyContext } from '../../providers/MyProvider';
import 'react-toastify/dist/ReactToastify.css';
import useFetch from '../../hooks/useFetch';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductDetails = () => {
  const {
    userData: { addToBookingDB, getBookingCart },
  } = useContext(MyContext);

  const [existItem, setExistItem] = useState(false);

  let [storeCart, setStoreCart] = useState(getBookingCart() || {});
  const productData = useLoaderData();
  // console.log(productData);

  const { id: searchId } = useParams();
  // console.log(existItem);

  const job = {};

    const handleAddToCart = (id) => {
      addToBookingDB(id);
      const exists = Object.keys(storeCart).includes(id);
      // console.log({ exists });
      if (exists)
      {
        setExistItem(true);
        return toast.error('Already added this item!');
      } else
      {
        setExistItem(true);
        toast.success('Product added to cart!');
      }
      const addedProduct = getBookingCart();
      setStoreCart(addedProduct);
    };

  const {
    category,
    _id,
    shipping,
    img,
    name,
    price,
    ratings,
    description,
    ratingsCount,
    seller,
    shippings,
    stock,
  } = productData || {};

  useEffect(() => {
    window.scrollTo(0, 0);
    const exists = Object.keys(storeCart).includes(_id);
    setExistItem(exists);
  }, []);
  return (
    <div>
      <ToastContainer />
      {/* <div className='my-4 grid md:grid-cols-1 lg:grid-cols-2'> */}
      <div className=' my-2 md:my-6 lg:mb-12 flex flex-col lg:flex-row justify-between gap-2'>
        <div className='lg:basis-1/2'>
          <div className='relative'>
            <img
              src={img}
              alt={img}
              className='my-2 p-2 rounded-lg w-full h-96 object-cover '
            />
            <p className='absolute m-2 left-4 top-4 text-white'>
              {stock > 0 ? (
                <span className=' px-3 py-1 font-bold bg-green-500 rounded'>
                  Stock In
                </span>
              ) : (
                <span className=' px-3 py-1 font-bold bg-red-600 rounded'>
                  Stock Out
                </span>
              )}
            </p>
          </div>
        </div>
        <div className='mx-2 lg:basis-1/2 flex flex-col justify-between'>
          <div className=''>
            <h4 className=' md:mt-4 lg:mt-0 md:mb-2 lg:text-2xl font-semibold'>
              {name}
            </h4>
            <div className='grid grid-cols-2'>
              <Div
                label='Price'
                value={price + '$'}
                bg='bg-gray-100'
                textSize={'md:text-xl'}
              />
              <Div label='Stock :' value={stock ? stock + 'pcs' : 0} />
            </div>
            <div className='grid grid-cols-2'>
              <Div label='Category :' value={category} />
              <Div label='Ratings :' value={ratings} />
            </div>
            {/* <p>{description.substring(0, 130)}......</p> */}
            <p className='mb-2'>{description}</p>
          </div>
          <div>
            <Button
              bg={!stock && 'bg-red-700'}
              onClick={() => handleAddToCart(_id)}
              disabled={!stock || existItem}
              width={'w-full'}
            >
              {stock
                ? existItem
                  ? 'Already added'
                  : 'Add to Cart'
                : 'Stock out'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
