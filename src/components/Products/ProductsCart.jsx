import React from 'react';
import { GrCart   } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import Button from '../ui/Button';


const ProductsCart = ({ product }) => {
  const data = product;
  // console.log(data);
  const {
    categroy,
    _id,
    img,
    name,
    price,
    quantity,
    ratings,
    ratingsCount,
    seller,
    shippings,
    stock,
  } = product;

  const handleModal = () => {
    console.log('modal_')
  }

  return (
    <div className='my-2 bg-white shadow-xl shadow-indigo-200 hover:shadow-lime-500 flex flex-col w-full h-full rounded-xl duration-100 group'>
      <div className='relative text-sm flex gap-2 items-center my-4 overflow-hidden  '>
        <img
          src={img}
          alt='product-image'
          className='ease-in duration-300 group-hover:scale-125 transition rounded-lg  h-40 
              w-full  object-cover mx-auto'
        />
       
        <Button onClick={handleModal} dataBSPlacement='right' title='Quick view' shape='rounded'>
          <FaEye />
        </Button>
      </div>

      <div className='p-4 flex flex-col justify-between flex-1 gap-2  mb-3'>
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
    </div>
  );
};

export default ProductsCart;
