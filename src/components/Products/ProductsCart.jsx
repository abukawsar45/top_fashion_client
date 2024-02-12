import React from 'react';
import { GrCart   } from 'react-icons/gr';
import { Link } from 'react-router-dom';


const ProductsCart = ({ product }) => {
  const data = product;
  console.log(data);
  const {
    categroy,
    id,
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

  return (
    <div className='my-2 bg-white shadow-xl shadow-indigo-200 hover:shadow-lime-500 flex flex-col w-full h-full rounded-xl duration-100 group'>
      <div className='text-sm flex gap-2 items-center my-4 overflow-hidden  '>
        <img
          src={img}
          alt='product-image'
          className='ease-in duration-300 group-hover:scale-110 transition rounded-lg  h-40 
              w-full  object-cover mx-auto'
        />
      </div>

      <div className='p-4 flex flex-col justify-between flex-1 gap-2  mb-3'>
        <div>
          <h4 className='font-semibold '>{name}</h4>
          <p className='text-gray-500 italic '>by {seller}</p>
        </div>
        <div className='w-full flex justify-end'>
          <div className='flex w-full gap-2 justify-between items-center'>
            <div>
              <p>{price - price + 1} $</p>
              <p>{ratings}</p>
            </div>

            <div>
              <button
                title='Add to the cart'
                className='transform ease-in-out font-semibold px-3 py-2 hover:bg-violet-500 rounded border border-gray-400 text-sm text-gray-600 hover:text-white hover:text-bold  cursor-pointer'
              >
                <GrCart />
              </button>
            </div>
            <div>
              <Link
                to={`ProductDetails/${id}`}
                className='transform ease-in-out duration-100 hover:bg-violet-500 font-semibold px-3 py-2 rounded border border-green-400 text-sm text-violet-600 hover:text-white'
              >
                More info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCart;
