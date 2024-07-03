import React, { useEffect, useState } from 'react';
import { GrCart } from 'react-icons/gr';
import { Link, useLocation } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import Div from '../Div/Div';
import { addToBookingDB, getBookingCart } from '../../utilities/fakeDB/fakeDb';
import { AiOutlineClose } from 'react-icons/ai';
import CloseButton from '../Button/CloseButton';

const ProductsCart = ({ product,productName, handleAddToCart }) => {
  const location = useLocation();

  // const {productName} = useParams();
  // const search = params.get('search');
  // const productName = params.get('productName');
  // console.log(productName);
  
  let [isOpen, setIsOpen] = useState(false);
  let [isCollapse, setIsCollapse] = useState(false);

  let [storeCart, setStoreCart] = useState(getBookingCart() || {});

  const [existItem, setExistItem] = useState(false);

  const {
    category,
    _id,
    img,
    name,
    price,
    ratings,
    description,
    ratingsCount,
    seller,
    shippings,
    stock,
  } = product || {};
  // console.log(product);

  const openModal = () => {
    setIsOpen(true);
    // console.log({ product });
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const exists = Object.keys(storeCart).includes(_id);
    // console.log({ exists });
    setExistItem(exists);
  }, []);

  return (
    <div className='my-2 w-full h-full bg-white shadow-md flex flex-col rounded-xl duration-100 group hover:shadow-gray-300'>
      <div className='relative text-sm flex gap-2 items-center my-4 overflow-hidden  '>
        <img
          src={img}
          alt='product-image'
          className='mx-auto h-40 
              w-full ease-in duration-300 object-cover rounded-lg transition group-hover:scale-125'
        />
        <p className='absolute m-2 left-4 top-4 text-white'>
          {!stock && (
            <span className=' px-3 py-1 font-bold bg-red-600 rounded'>
              Stock Out
            </span>
          )}
        </p>
        <Button
          onClick={openModal}
          dataBSPlacement='right'
          title='Quick view'
          shape='rounded'
        >
          <FaEye />
        </Button>
      </div>

      <div className='mb-3 p-4 flex flex-col justify-between flex-1 gap-2'>
        <div>
          <h4 className='font-semibold '>{name}</h4>
          <p className='text-gray-500 italic '>by {seller}</p>
        </div>
        <div className='w-full flex justify-end'>
          <div className='flex w-full gap-2 justify-between items-center'>
            <div>
              <p>{price} $</p>
              <p>{ratings}</p>
            </div>

            <div>
              <Button
                bg={!stock && 'bg-gray-400'}
                onClick={() => handleAddToCart(_id, setExistItem)}
                disabled={!stock}
              >
                <GrCart />
              </Button>
            </div>
            <div>
              {location ? (
                <Link
                  to={
                    productName
                      ? `../../ProductDetails/${_id}`
                      : `ProductDetails/${_id}`
                  }
                >
                  <Button text='More info' />
                </Link>
              ) : (
                <Link to={`ProductDetails/${_id}`}>
                  <Button text='More info' />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <Modal isOpen={isOpen} closeModal={closeModal}>
          {/* <div className='my-4 grid md:grid-cols-1 lg:grid-cols-2'> */}
          <div className='relative'>
            <CloseButton onClick={() => setIsOpen(false)}>
              <AiOutlineClose />
            </CloseButton>
            <div className=' flex md:flex-col lg:flex-row justify-between gap-2  '>
              <div className='lg:basis-1/2'>
                <div className='relative'>
                  <img
                    src={img}
                    alt={img}
                    className='my-2 p-2 rounded-lg w-full h-64 object-cover '
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
              <div className='lg:basis-1/2 flex flex-col justify-between'>
                <div className=''>
                  <h4 className='md:mt-4 lg:mt-0 md:mb-2 lg:text-2xl font-semibold'>
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
                  <p className='mb-2 text-sm'>
                    {isCollapse
                      ? description
                      : description.substring(0, 130) + '....'}{' '}
                    <span
                      className='text-blue-500'
                      onClick={() => setIsCollapse(!isCollapse)}
                    >
                      {isCollapse ? 'see less' : 'see more'}
                    </span>{' '}
                  </p>
                </div>
                <div>
                  <Button
                    bg={!stock && 'bg-red-700'}
                    onClick={() => handleAddToCart(_id, setExistItem)}
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
        </Modal>
      )}
    </div>
  );
};

export default ProductsCart;
