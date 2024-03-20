import React, { useEffect, useState } from 'react';
import { GrCart } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

const ProductsCart = ({ product }) => {
  let [isOpen, setIsOpen] = useState(false);

  const {
    categroy,
    _id,
    img,
    name,
    price,
    quantity,
    ratings,
    description,
    ratingsCount,
    seller,
    shippings,
    stock,
  } = product || {};

  const openModal = () => {
    setIsOpen(true);
    console.log({ product });
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className='my-2 w-full h-full bg-white shadow-xl flex flex-col rounded-xl shadow-indigo-200 duration-100 group hover:shadow-lime-500'>
      <div className='relative text-sm flex gap-2 items-center my-4 overflow-hidden  '>
        <img
          src={img}
          alt='product-image'
          className='mx-auto h-40 
              w-full ease-in duration-300 object-cover rounded-lg transition group-hover:scale-125'
        />

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
              <Button>
                <GrCart />
              </Button>
            </div>
            <div>
              <Link to={`ProductDetails/${_id}`}>
                <Button text={'More info'} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <Modal isOpen={isOpen} closeModal={closeModal} title={name}>
          <div className='my-4'>{description}</div>
        </Modal>
      )}
    </div>
  );
};

export default ProductsCart;
