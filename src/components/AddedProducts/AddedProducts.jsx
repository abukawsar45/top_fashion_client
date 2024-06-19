import React, { useContext, useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { IoMdAdd } from 'react-icons/io';
import { GrFormSubtract } from 'react-icons/gr';
import { MyContext } from '../../providers/MyProvider';
import useFetch from '../../hooks/useFetch';

const AddedProducts = () => {
  const [cart, setCart] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const [allData, setAllData] = useState('');
  const { data, loading } = useFetch('/allProducts');
  const {
    userData: {
      loading: localLoading,
      setLoading: setLocalLoading,
      addToBookingDB,
      getBookingCart,
      removeFromBookingDB,
    },
  } = useContext(MyContext);

 
  let newCart = [];



  // handle product quantity
  const handleQuantity = (direction, product) => {
    console.log(product);
    if (direction === 'increment') {
      product.quantity += 1;
    } else if (direction === 'decrement') {
      if (product.quantity > 1) {
         product.quantity -= 1;
      } else {
        return; 
      }
    }

    const updatedCart = cart.map((item) => {
      console.log(item)
      if (item._id === product._id)
      {
        console.log('yes')
        return { ...item, quantity: product.quantity };
      }
      return item;
    });

    setCart(updatedCart);
    addToBookingDB(product._id, direction);
  };

  // remove products
  const handleRemoveFromCart = (id) => {
    console.log(id)
    const remaining = cart.filter((product) => product._id !== id);
    setCart(remaining);
    removeFromBookingDB(id);
  };

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedCart = getBookingCart();
        
        setLoadingData(true);
        const orderData = Object.keys(storedCart).map((id) => {
          const addedProduct = allData?.find((pd) => pd._id === id);
          // console.log({ addedProduct });
          if (addedProduct) {
            
            const quantity = storedCart[id];
            // console.log({ quantity });
            addedProduct.quantity = quantity;
            // console.log({ addedProduct });
            return addedProduct;
          }
          
          return null;
        });

        // console.log({ orderData });
        // console.log(orderData);
        if(orderData)
        {
          
          setCart(orderData.filter(Boolean));
          setLoadingData(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [productsData]);

  useEffect(() => {
    setAllData(data);
    setProductsData(data);
    
  }, [loading]);

   

  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = ((totalPrice * 0.5) / 100).toFixed(2);
  const discount = ((totalPrice * 0.2) / 100).toFixed(2);
  const grandTotal = (
    totalPrice +
    totalShipping +
    parseFloat(tax) -
    discount
  ).toFixed(2);
  // console.log(discount);
  return (
    <div>
      <div className='p-4 flex flex-col'>
        {loadingData ? (
          <p>Loadingggg..</p>
        ) : (
          <>
            {' '}
            <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
              <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
                <div className='overflow-hidden'>
                  <table className='min-w-full text-left text-sm font-light'>
                    <thead className='border-b font-medium dark:border-neutral-500'>
                    <tr>
                      <th scope='col' className='px-6 py-2'>
                        #
                      </th>
                      <th scope='col' className='px-6 py-2'>
                        Image
                      </th>
                      <th scope='col' className='px-6 py-2'>
                        Name
                      </th>
                      <th scope='col' className='px-6 py-2'>
                        
                      </th>
                      <th scope='col' className='px-6 py-2'>
                        Price
                      </th>
                      <th scope='col' className='text-center px-6 py-2'>
                        Quantity
                      </th>
                      <th scope='col' className='px-6 py-2'>
                        Total
                      </th>
                      <th scope='col' className='px-6 py-2'>
                        Remove
                      </th>
                    </tr>
                  </thead> 
                    <tbody>
                      {cart.map((orderProduct, ind) => {
                        return (
                          <>
                            <tr
                              key={orderProduct.name}
                              className='border-b font-bold text-gray-400 dark:border-neutral-500'
                            >
                              <td className='whitespace-nowrap px-6 py-2 font-medium'>
                                {ind + 1}
                              </td>
                                <td className='whitespace-nowrap px-6 py-2 font-medium'>
                                  <img
                                    src={orderProduct?.img}
                                    alt='Product-images'
                                    className='w-8 h-8'
                                  />
                                </td>
                              <td
                                title={orderProduct?.name}
                                className='whitespace-nowrap px-6 py-2'
                              >
                                {orderProduct?.name?.length > 12
                                  ? orderProduct?.name.substring(0, 15) + '...'
                                  : orderProduct?.name}{' '}
                              </td>
                              <td className='whitespace-nowrap px-6 py-2 font-medium'></td>
                              <td className=' whitespace-nowrap px-6 py-2'>
                                ${orderProduct?.price}
                              </td>
                              <td className=' whitespace-nowrap px-6 py-2 flex justify-between items-center gap-1'>
                                <button
                                  onClick={() =>
                                    handleQuantity('decrement', orderProduct)
                                  }
                                  disabled={orderProduct?.quantity <= 1}
                                  className={`bg-gray-400 flex  justify-center items-center text-bold p-1 h-6 w-6 rounded-full ${
                                    orderProduct?.quantity === 1
                                      ? 'bg-gray-500 cursor-default text-gray-600'
                                      : 'hover:text-gray-700 text-white  '
                                  } `}
                                >
                                  <GrFormSubtract />
                                </button>
                                <span>{orderProduct?.quantity}</span>

                                <button
                                  onClick={() =>
                                    handleQuantity('increment', orderProduct)
                                  }
                                  className='bg-gray-400 flex justify-center items-center p-1 text-white hover:text-gray-900 text-bold h-6 w-6 rounded-full '
                                >
                                  <IoMdAdd />
                                </button>
                              </td>
                              <td className=' whitespace-nowrap px-6 py-2'>
                                ${orderProduct?.price * orderProduct?.quantity}
                              </td>
                              <td className='whitespace-nowrap px-6 py-2'>
                                <button
                                  onClick={() =>
                                    handleRemoveFromCart(orderProduct?._id)
                                  }
                                  className=''
                                >
                                  <MdDelete className='text-red-400 hover:text-red-600 text-xl' />
                                </button>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className='mt-4 grid grid-cols-12 '>
              <div className='col-span-8 '></div>
              <div className='border border-t-gray-300 col-span-12 md:col-span-4 '>
                <div className='border-b flex justify-between text-gray-400 dark:border-neutral-500'>
                  <p className='whitespace-nowrap px-1 py-2 '>Sub Total</p>
                  <p className='whitespace-nowrap px-1 py-2 font-medium'>
                    {totalPrice}
                  </p>
                </div>
                <div className='border-b flex justify-between text-gray-400 dark:border-neutral-500'>
                  <p className='whitespace-nowrap px-1 py-2 '>TAX</p>
                  <p className='whitespace-nowrap px-1 py-2 font-medium'>
                    {tax}
                  </p>
                </div>
                <div className='border-b flex justify-between text-gray-400 dark:border-neutral-500'>
                  <p className='whitespace-nowrap px-1 py-2 '>Shipping</p>
                  <p className='whitespace-nowrap px-1 py-2 font-medium'>
                    {totalShipping}
                  </p>
                </div>
                <div className='border-b flex justify-between text-gray-400 dark:border-neutral-500'>
                  <p className='whitespace-nowrap px-1 py-2 text-blue-400 '>
                    Discount on Cart
                  </p>
                  <p className='whitespace-nowrap px-1 py-2 font-medium'>
                    {discount}
                  </p>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-12 mt-2 bg-blue-200 p-2 rounded'>
              <div className='col-span-8 '>
                <p className='text-blue-500 '>Products count ({quantity}) </p>
              </div>
              <div className='col-span-4 '>
                <div className=' flex justify-between px-1 text-blue-500'>
                  <p className=' text-xl font-bold'>Total</p>
                  <p className=' text-xl font-bold'>${grandTotal}</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AddedProducts;
